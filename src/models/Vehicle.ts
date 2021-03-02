import { IVehicle } from '../interfaces/interfaces'

export class Vehicle implements IVehicle {
  id: string
  numberPlate: string
  brand: string
  model: string
  registrationDate: Date

  constructor (vehicle: IVehicle) {
    this.id = vehicle.id
    this.numberPlate = vehicle.numberPlate
    this.brand = vehicle.brand
    this.model = vehicle.model
    this.registrationDate = vehicle.registrationDate
  }
}
