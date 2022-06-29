import User from '../users.entity'

export class GetOrCreateUserDto {
  name: string
  email?: string
  password?: string
}

export class GetOrCreateUserResponseDto {
  token: string
  user: User
}
