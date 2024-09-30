import { Group } from 'src/group/entities/group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'teacher' })
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: String;
  @Column()
  surname: string;
  @OneToMany((type) => Group, (group) => group.teacher, { cascade: true })
  groups: Group[];
}
