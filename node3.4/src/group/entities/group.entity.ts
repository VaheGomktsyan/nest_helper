import { Grouplesson } from 'src/grouplesson/entities/grouplesson.entity';
import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'group' })
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  count: number;

  @ManyToOne((type) => Teacher, (te) => te.groups, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  teacher: Teacher;
  @OneToMany((type) => Student, (st) => st.group)
  students: Student[];
  
  @OneToMany((type)=>Grouplesson,(gr)=>gr.groupless)
  groupLessons:Grouplesson[]
}
