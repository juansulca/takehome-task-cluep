import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client"
import { UserService } from "./user.service";
import { MessageService } from "./message.service";

const prisma = new PrismaClient()
const userService = new UserService(prisma);
const messageService = new MessageService(prisma);

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  // await prisma.user.create({data: { firstname: "Test", lastname: "User"}});
  res.json({hello: "from the messages API"});
});

app.get("/user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await userService.get(id);
  res.json(user);
});

app.get("/user/:id/messages", async (req: Request, res: Response) => {
  const id = req.params.id;
  const messages = await messageService.getAll(id);
  res.json(messages);
});

app.post("/user/:id/messages", async (req: Request<{ id: string }, {}, {message: string}>, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const messages = await messageService.post({userId: id, ...body});
  res.json(messages);
});
// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });

export default app;

