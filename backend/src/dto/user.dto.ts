export class CreateUserDto {
  id: string
  name: string
  email: string
  password: string
  isActive: boolean
  settings: string
}

export class UpdateUserDto {
  name: string
  email: string
  password: string
  isActive: boolean
  settings: string
}
