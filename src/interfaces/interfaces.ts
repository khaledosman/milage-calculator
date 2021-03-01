export interface Vehicle {
  id: string
  numberPlate: string
  brand: string
  model: string
  registrationDate: Date
}

export interface Event {
  date: Date
}

export interface AdvertiseForSale extends Event {
  price: number
  mileageInKM: number
}

export interface RoadWorthyTest extends Event {
  mileageInKM: number
  result: "PASS" | "FAIL"
}

export interface ChangeOfNumberplate extends Event {
  fromNumberPlate: string
  toNumberPlate: string
}
