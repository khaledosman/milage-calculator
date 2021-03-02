export interface IVehicle {
  id: string
  numberPlate: string
  brand: string
  model: string
  registrationDate: Date
}

export interface IEvent {
  id: string
  date: Date
  vehicleId: string
}

export interface IAdvertiseForSale extends IEvent {
  price: number
  mileageInKM: number
}

export interface IRoadWorthyTest extends IEvent {
  mileageInKM: number
  result: "PASS" | "FAIL"
}

export interface IChangeOfNumberplate extends IEvent {
  fromNumberPlate: string
  toNumberPlate: string
}
