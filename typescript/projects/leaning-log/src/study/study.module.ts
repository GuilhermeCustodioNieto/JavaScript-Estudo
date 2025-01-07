import { Study } from './entities/study.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StudyService } from './study.service';
import { StudyController } from './study.controller';
import { Topic } from 'src/topic/entities/topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Study, Topic])],
  controllers: [StudyController],
  providers: [StudyService],
})
export class StudyModule { }
