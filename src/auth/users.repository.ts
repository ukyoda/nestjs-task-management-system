import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, QueryFailedError, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dt';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ username, password: hashedPassword });

    try {
      await this.save(user);
    } catch (err: any) {
      // anyに逃げるOTL
      if (err.code === '23505') {
        // duplicate entry
        throw new ConflictException('Username already exists');
      } else {
        console.error(err.message);
        throw new InternalServerErrorException('Create User Failed...');
      }
    }
  }
}
