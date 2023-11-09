import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { randomUUID } from 'node:crypto';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 6;
    const passwordHash = await hash(createUserDto.password, saltOrRounds);
    const user: User = {
      ...createUserDto,
      password: passwordHash,
      id: randomUUID(),
    };

    // In-memory Repository
    this.users.push(user);

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
