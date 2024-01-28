import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const valid = await bcrypt.compare(password, user.password);

    if (user && valid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: User) {
    const { username, id } = user;
    return {
      access_token: this.jwtService.sign({
        username,
        sub: id,
      }),
      user,
    };
  }

  async signup(loginUserInput: LoginUserInput) {
    const { username } = loginUserInput;
    const user = await this.usersService.findOne(username);

    if (user) {
      throw new Error('User already exists');
    }

    const password = await bcrypt.hash(loginUserInput.password, 10);

    this.usersService.create({
      ...loginUserInput,
      password,
    });
  }
}
