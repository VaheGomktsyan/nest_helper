import { Group } from 'src/group/entities/group.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity({ name: 'student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @ManyToMany((type) => Group, (group) => group.students, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  group:Group;
}
