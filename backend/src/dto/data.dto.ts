export class CreateDataDto {
  id: string
  deviceId: string
  userId: string
  type: string
  value: string
}

export class UpdateDataDto {
  type: string
  value: string
}
