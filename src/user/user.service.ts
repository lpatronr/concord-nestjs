import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  // eslint-disable-next-line no-unused-vars
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new BadRequestException({ message: 'User not found' });
    return user;
  }

  async updateUsername(id: number, name: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new BadRequestException({ message: 'User not found' });
    user.username = name;
    return this.usersRepository.save(user);
  }

  async deleteOne(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
