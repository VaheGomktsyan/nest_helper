import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    return await this.teacherRepository.save(createTeacherDto);
  }

  async findAll() {
    return await this.teacherRepository.find();
  }

  async findOne(id: number) {
    const find = await this.teacherRepository.findOne({ where: { id } });
    if (find) {
      return find;
    } else {
      return { message: 'Teacher not found' };
    }
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const find = await this.teacherRepository.findOne({ where: { id } });
    if (find) {
      await this.teacherRepository.update(id, updateTeacherDto);
      return true;
    } else {
      return false;
    }
  }

  async remove(id: number) {
    const find = await this.teacherRepository.findOne({ where: { id } });
    if (find) {
      await this.teacherRepository.delete(id);
      return true;
    } else {
      return false;
    }
  }
}
