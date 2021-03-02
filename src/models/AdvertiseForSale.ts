import { Event } from './Event'
import { IEvent, IAdvertiseForSale } from '../interfaces/interfaces'

export class AdvertiseForSale extends Event implements IAdvertiseForSale {
  price: number
  mileageInKM: number

  constructor (event: IAdvertiseForSale) {
    super({ id: event.id, date: event.date, vehicleId: event.vehicleId })
    this.price = event.price
    this.mileageInKM = event.mileageInKM
  }
}
