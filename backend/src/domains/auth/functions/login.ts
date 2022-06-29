import { BadRequestException } from '@nestjs/common'
import User from '../../users/users.entity'
import { LoginDto, LoginResponseDto } from '../dto/login.dto'
import * as jwtEncode from 'jwt-encode'
import * as bcrypt from 'bcrypt'


export async function login (body: LoginDto): Promise<LoginResponseDto> {
  const user = await User.findOne({ where: { email: body.email } })

  if (!user || !user.password) throw new BadRequestException('Invalid Credentials')
  if (!await bcrypt.compare(body.password, user.password)) throw new BadRequestException('Invalid Credentials')
  return parseResponse(user.toJSON())
}

function parseResponse (user): LoginResponseDto {
  const { senha, ...userData } = user
  return {
    token: jwtEncode(userData, process.env.SECRET),
  }
}