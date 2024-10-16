import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }
}
