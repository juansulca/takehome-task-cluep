import { Request, Response } from "express";
import { MessageService } from "./message.service";
import { UserService } from "./user.service";

export class UserHandler {
  constructor(private readonly userService: UserService, private readonly messageService: MessageService) {}

  async get(req: Request, res: Response) {
    const id = req.params.id;
    const user = await this.userService.get(id);
    res.json(user);
  }

  async getAllMessages(req: Request, res: Response) {
    const id = req.params.id;
    const users = await this.messageService.getAll(id);
    res.json(users);
  }

  async postMessage(req: Request<{ id: string }, {}, {message: string}>, res: Response) {
    const id = req.params.id;
    const body = req.body;
    const messages = await this.messageService.post({userId: id, ...body});
    res.json(messages);
  }
}