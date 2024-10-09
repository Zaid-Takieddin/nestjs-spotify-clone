import { Test, TestingModule } from '@nestjs/testing';
import { PlayListsController } from './play-lists.controller';
import { PlayListsService } from './play-lists.service';

describe('PlayListsController', () => {
  let controller: PlayListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayListsController],
      providers: [PlayListsService],
    }).compile();

    controller = module.get<PlayListsController>(PlayListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
