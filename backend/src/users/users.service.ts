import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  // Injects the UsersRepository into the UsersService using the @InjectRepository() decorator.
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(uuid: string) {
    return this.usersRepository.findOneBy({ uuid });
  }

  signup(user: User) {
    return this.usersRepository.save(user);
  }
}
