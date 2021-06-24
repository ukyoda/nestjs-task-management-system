import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dt';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.usersRepository.createUser(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<User> {
        const { username, password } = authCredentialsDto;
        const user = await this.usersRepository.findOne({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        } else {
            throw new UnauthorizedException(
                'Please check your login credentials',
            );
        }
    }
}
