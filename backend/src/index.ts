import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client"
import { UserService } from "./user.service";
import { MessageService } from "./message.service";
import { UserHandler } from "./user.handler";

const prisma = new PrismaClient()
const userService = new UserService(prisma);
const messageService = new MessageService(prisma);
const userHandler = new UserHandler(userService, messageService);

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  // await prisma.user.create({data: { firstname: "Test", lastname: "User"}});
  res.json({hello: "from the messages API"});
});

app.get("/user/:id", async (req: Request, res: Response) => {
  await userHandler.get(req, res);
});

app.get("/user/:id/messages", async (req: Request, res: Response) => {
  await userHandler.getAllMessages(req, res);
});

app.post("/user/:id/messages", async (req: Request<{ id: string }, {}, {message: string}>, res: Response) => {
  await userHandler.postMessage(req, res);
});

export default app;

