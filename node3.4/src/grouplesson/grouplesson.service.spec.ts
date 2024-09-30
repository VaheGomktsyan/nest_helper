import { Test, TestingModule } from '@nestjs/testing';
import { GrouplessonService } from './grouplesson.service';

describe('GrouplessonService', () => {
  let service: GrouplessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrouplessonService],
    }).compile();

    service = module.get<GrouplessonService>(GrouplessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
