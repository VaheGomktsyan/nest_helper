import { PartialType } from '@nestjs/mapped-types';
import { CreateGrouplessonDto } from './create-grouplesson.dto';

export class UpdateGrouplessonDto extends PartialType(CreateGrouplessonDto) {}
