import { Event } from './Event'
import { IRoadWorthyTest } from '../interfaces/interfaces'

export class RoadWorthyTest extends Event implements IRoadWorthyTest {
  mileageInKM: number
  result: 'PASS' | 'FAIL'

  constructor (event: IRoadWorthyTest) {
    super({ id: event.id, date: event.date, vehicleId: event.vehicleId })
    this.mileageInKM = event.mileageInKM
    this.result = event.result
  }
}
