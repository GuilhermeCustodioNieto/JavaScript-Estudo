import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>
  ) { }

  create(topic: CreateTopicDto) {
    return this.topicRepository.save(topic);
  }

  findAll() {
    return this.topicRepository.find({
      relations: ['studies'],
    });
  }

  findOne(id: number) {
    return this.topicRepository.findOne({
      where: { id },
      relations: ['studies']
    });
  }

  update(id: number, topic: Partial<Topic>) {
    return this.topicRepository.update(id, topic);
  }

  remove(id: number) {
    return this.topicRepository.delete(id)
  }
}
