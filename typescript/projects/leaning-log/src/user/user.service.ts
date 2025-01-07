import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email }
    })
  }


  create(user: Partial<User>) {
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find({
      relations: ['topics']
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['topics']

    });
  }

  update(id: number, user: Partial<User>) {
    return this.userRepository.update(id, user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
