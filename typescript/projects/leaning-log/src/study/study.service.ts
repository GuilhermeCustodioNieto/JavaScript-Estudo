import { Injectable } from '@nestjs/common';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Study } from './entities/study.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudyService {
  constructor(
    @InjectRepository(Study)
    private readonly studyRepository: Repository<Study>
  ) { }

  create(study: Partial<Study>) {
    return this.studyRepository.save(study)
  }

  findAll() {
    return this.studyRepository.find();
  }

  findOne(id: number) {
    return this.studyRepository.findOneBy({ id })
  }

  update(id: number, study: Partial<Study>) {
    return this.studyRepository.update(id, study)
  }

  remove(id: number) {
    return this.studyRepository.delete(id);
  }
}
