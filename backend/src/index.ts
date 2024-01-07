import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });

export default app;

