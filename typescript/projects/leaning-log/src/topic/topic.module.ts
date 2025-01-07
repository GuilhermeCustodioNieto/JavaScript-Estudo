import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { StudyModule } from 'src/study/study.module';

@Module({
  imports: [TypeOrmModule.forFeature([Topic]), StudyModule],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule { }
