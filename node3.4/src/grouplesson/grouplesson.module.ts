import { Module } from '@nestjs/common';
import { GrouplessonService } from './grouplesson.service';
import { GrouplessonController } from './grouplesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grouplesson } from './entities/grouplesson.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Grouplesson])],

  controllers: [GrouplessonController],
  providers: [GrouplessonService],
})
export class GrouplessonModule {}
