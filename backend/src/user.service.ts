import { PrismaClient } from "@prisma/client";

export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  async get(id: string) {
    const user = await this.prisma.user.findFirst({ where: { id }});
    return user;
  }
}

