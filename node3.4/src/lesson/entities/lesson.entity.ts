import { Grouplesson } from 'src/grouplesson/entities/grouplesson.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"lesson"})
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: String;

  @OneToMany((type)=>Grouplesson,(st)=>st.groupLesson)
  groupLesson:Lesson[]

}
