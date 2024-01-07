import { PrismaClient } from "@prisma/client";
import { CreateMessageDto } from "model/message.dto";

export class MessageService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAll(userId: string) {
    const messages = await this.prisma.message.findMany({ where: {
      userId
    }});
    return messages;
  }

  async post(message: CreateMessageDto) {
    const msg = await this.prisma.message.create({
      data: message
    });

    return msg;
  }
}

