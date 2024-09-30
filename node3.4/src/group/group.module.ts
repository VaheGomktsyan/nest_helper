import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Grouplesson } from 'src/grouplesson/entities/grouplesson.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Group,Teacher,Lesson,Grouplesson])],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
