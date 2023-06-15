export class CreateDeviceDto {
  id: string
  userId: string
  name: string
  plant: string
  soil: string
  city: string
  street: string
  lat: string
  lng: string
}

export class UpdateDeviceDto {
  name: string
  plant: string
  soil: string
  city: string
  street: string
  lat: string
  lng: string
}
