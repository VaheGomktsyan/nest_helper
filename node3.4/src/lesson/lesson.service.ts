import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async create(createLessonDto: CreateLessonDto) {
    const less = await this.lessonRepository.findOne({
      where: { name: createLessonDto.name },
    });
    if (less) {
      return { message: createLessonDto.name + ' has already' };
    } else {
      return await this.lessonRepository.save(createLessonDto);
    }
  }

  async findAll() {
    return await this.lessonRepository.find();
  }

  async findOne(id: number) {
    const find = await this.lessonRepository.findOne({ where: { id } });
    if (find) {
      return find;
    } else {
      return { message: 'lesson not found' };
    }
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const find = await this.lessonRepository.findOne({ where: { id } });
    if (find) {
      await this.lessonRepository.update(id, updateLessonDto);
      return true;
    } else {
      return false;
    }
  }

  async remove(id: number) {
    const find = await this.lessonRepository.findOne({ where: { id } });
    if (find) {
      await this.lessonRepository.delete(id);
      return true;
    } else {
      return false;
    }
  }
}
