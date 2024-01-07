import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client'
import { UserService } from "./user.service";

const prisma = new PrismaClient()
const userService = new UserService(prisma);

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {

  const newUser = await prisma.user.create({
    data: {
      firstname: 'Alice',
      lastname: 'LASD',
    },
  })

  const users = await prisma.user.findMany()
  res.send("Express + TypeScript Server");
});

app.get("/user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await userService.get(id);
  res.json(user);
});
// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });

export default app;

