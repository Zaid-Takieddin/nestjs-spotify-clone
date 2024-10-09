import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PlayListsService } from './play-lists.service';
import { Prisma } from '@prisma/client';

@Controller('play-lists')
export class PlayListsController {
  constructor(private readonly playListsService: PlayListsService) {}

  @Post()
  create(@Body() createPlayListDto: Prisma.PlayListCreateInput) {
    return this.playListsService.create(createPlayListDto);
  }

  @Get()
  findAll() {
    return this.playListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playListsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlayListDto: Prisma.PlayListUpdateInput,
  ) {
    return this.playListsService.update(id, updatePlayListDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.playListsService.remove(id);
  }
}
