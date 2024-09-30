import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrouplessonService } from './grouplesson.service';
import { CreateGrouplessonDto } from './dto/create-grouplesson.dto';
import { UpdateGrouplessonDto } from './dto/update-grouplesson.dto';

@Controller('grouplesson')
export class GrouplessonController {
  constructor(private readonly grouplessonService: GrouplessonService) {}

  @Post()
  create(@Body() createGrouplessonDto: CreateGrouplessonDto) {
    return this.grouplessonService.create(createGrouplessonDto);
  }

  @Get()
  findAll() {
    return this.grouplessonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grouplessonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrouplessonDto: UpdateGrouplessonDto) {
    return this.grouplessonService.update(+id, updateGrouplessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grouplessonService.remove(+id);
  }
}
