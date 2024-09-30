import { Injectable } from '@nestjs/common';
import { CreateGrouplessonDto } from './dto/create-grouplesson.dto';
import { UpdateGrouplessonDto } from './dto/update-grouplesson.dto';

@Injectable()
export class GrouplessonService {
  create(createGrouplessonDto: CreateGrouplessonDto) {
    return 'This action adds a new grouplesson';
  }

  findAll() {
    return `This action returns all grouplesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grouplesson`;
  }

  update(id: number, updateGrouplessonDto: UpdateGrouplessonDto) {
    return `This action updates a #${id} grouplesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} grouplesson`;
  }
}
