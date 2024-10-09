import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PlayListsService {
  create(createPlayListDto: Prisma.PlayListCreateInput) {
    return 'This action adds a new playList';
  }

  findAll() {
    return `This action returns all playLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playList`;
  }

  update(id: number, updatePlayListDto: Prisma.PlayListUpdateInput) {
    return `This action updates a #${id} playList`;
  }

  remove(id: number) {
    return `This action removes a #${id} playList`;
  }
}
