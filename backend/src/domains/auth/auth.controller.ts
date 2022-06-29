import { Body, Controller, Post } from '@nestjs/common'
import { LoginDto, LoginResponseDto } from './dto/login.dto'
import { login } from './functions/login'

@Controller('auth')
export class AuthController {
  @Post('/login')
  async login (@Body() body: LoginDto): Promise<LoginResponseDto> {
    return await login(body)
  }
}
