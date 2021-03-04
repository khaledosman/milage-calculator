export interface IVehicle {
  id: string
  numberPlate: string
  brand: string
  model: string
  registrationDate: string | number
}

export interface IEvent {
  id: string
  date: string | number
  vehicleId: string
  type: "AdvertiseForSale" | "RoadWorthyTest" | "ChangeOfNumberplates"
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
