import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  // eslint-disable-next-line no-unused-vars
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  @Get(':id')
  getUser(@Param('id') id: number): string {
    return `This action returns a #${id} user`;
  }
}
