import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

    return this.databaseService.user.create({
      data: createUserDto,
      omit: {
        password: true,
      },
    });
  }

  async findAll() {
    return this.databaseService.user.findMany({
      omit: {
        password: true,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.user.findUniqueOrThrow({
      where: { id },
      omit: {
        password: true,
      },
    });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      data: updateUserDto,
      where: { id },
      omit: {
        password: true,
      },
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: { id },
      omit: {
        password: true,
      },
    });
  }
}
