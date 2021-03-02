import { Event } from './Event'
import { IEvent, IChangeOfNumberplates } from '../interfaces/interfaces'

export class ChangeOfNumberplates extends Event implements IChangeOfNumberplates {
  fromNumberPlate: string
  toNumberPlate: string

  constructor (event: IChangeOfNumberplates) {
    super({ id: event.id, date: event.date, vehicleId: event.vehicleId })
    this.fromNumberPlate = event.fromNumberPlate
    this.toNumberPlate = event.toNumberPlate
  }
}
