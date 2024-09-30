import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './group/group.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrouplessonModule } from './grouplesson/grouplesson.module';
import { Student } from './student/entities/student.entity';
import { Teacher } from './teacher/entities/teacher.entity';
import { Group } from './group/entities/group.entity';
import { Lesson } from './lesson/entities/lesson.entity';
import { Grouplesson } from './grouplesson/entities/grouplesson.entity';

@Module({
  imports: [
    GroupModule,
    StudentModule,
    TeacherModule,
    LessonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'node3.4',
      entities: [Student, Teacher, Group, Lesson, Grouplesson],
      // synchronize: true
    }),
    GrouplessonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
