import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from '../database/PrismaService';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(username: string) {
    return this.prisma.user.findFirst({
      where: {
        username,
      },
    });
  }
}
