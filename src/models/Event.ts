import { IEvent } from '../interfaces/interfaces'

export abstract class Event implements IEvent {
  id: string;
  date: Date;
  vehicleId: string;

  constructor ({ id, date, vehicleId }: IEvent) {
    this.id = id
    this.date = date
    this.vehicleId = vehicleId
  }
}
