import { Group } from 'src/group/entities/group.entity';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Grouplesson {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Group, (gg) => gg.groupLessons, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  groupless: Group;

  @ManyToOne((type) => Lesson, (ll) => ll.groupLesson, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  groupLesson: Lesson;
}
