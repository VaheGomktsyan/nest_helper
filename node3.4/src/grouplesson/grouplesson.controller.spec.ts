import { Test, TestingModule } from '@nestjs/testing';
import { GrouplessonController } from './grouplesson.controller';
import { GrouplessonService } from './grouplesson.service';

describe('GrouplessonController', () => {
  let controller: GrouplessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrouplessonController],
      providers: [GrouplessonService],
    }).compile();

    controller = module.get<GrouplessonController>(GrouplessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
