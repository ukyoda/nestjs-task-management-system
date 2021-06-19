import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dt';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,) {}

  @Post('/signup')
  async signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    await this.authService.signUp(authCredentialsDto);
  }
}
