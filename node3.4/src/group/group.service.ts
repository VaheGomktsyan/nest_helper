import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grouplesson } from 'src/grouplesson/entities/grouplesson.entity';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    @InjectRepository(Grouplesson)
    private groupLessonRepository: Repository<Grouplesson>,
  ) {}
  async create(createGroupDto: CreateGroupDto) {
    const { name, count, lessons, teacherId } = createGroupDto;
    const teacher = await this.teacherRepository.findOne({
      where: { id: teacherId },
    });
    if (teacher) {
      if (lessons?.length) {
        for (let e of lessons) {
          let less = await this.lessonRepository.findOne({ where: { id: e } });
          if (!less) {
            return { message: e + 'lesson not found' };
          }
        }
      }
      let group = await this.groupRepository.save({ name, count, teacher});
      if (lessons?.length) {
        for (let e of lessons) {
          let less = await this.lessonRepository.findOne({ where: { id: e } });
          await this.groupLessonRepository.save({
            groupless: group,
            groupLesson: less,
          });
        }
      }
      return group;
    } else {
      return { message: 'teacher not found' };
    }
  }

  findAll() {
    return `This action returns all group`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
