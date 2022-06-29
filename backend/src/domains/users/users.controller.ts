import { Body, Controller, Post } from '@nestjs/common';
import { GetOrCreateUserDto, GetOrCreateUserResponseDto } from './dto/get-or-create-user.dto';
import { getOrCreateUser } from './functions/get-or-create-user';

@Controller('users')
export class UsersController {

  @Post('/get-or-create')
  async getOrCreateUser (@Body() body: GetOrCreateUserDto): Promise<GetOrCreateUserResponseDto> {
    return await getOrCreateUser(body)
  }

}
