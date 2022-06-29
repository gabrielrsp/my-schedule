import User from '../users.entity'
import * as jwtEncode from 'jwt-encode'

import { GetOrCreateUserDto, GetOrCreateUserResponseDto } from '../dto/get-or-create-user.dto'
import { encryptPassword } from './encrypt-password'

export async function getOrCreateUser (body: GetOrCreateUserDto): Promise<GetOrCreateUserResponseDto> {
  const userExists = await User.findOne({ where: { email: body.email } })
  if (userExists) return parseResponse(userExists)

  if (body.password) body.password = await encryptPassword(body.password)
  const user = await User.create(body as Omit<User, 'id' | 'password'>)

  return parseResponse(user)
}

function parseResponse (user: User) {
  const { password, ...dataUser } = user.toJSON() as any
  return {
    token: jwtEncode(dataUser, process.env.SECRET),
    user,
  }
}
