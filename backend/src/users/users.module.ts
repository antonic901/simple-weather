import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  /* 
    This module (users.module) uses the forFeature() method to define which repositories are registered in the current scope. 
    With that in place, we can inject the UsersRepository into the UsersService using the @InjectRepository() decorator.
  */
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
