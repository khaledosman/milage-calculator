import { calculateAverageAnnualMileage } from '../src/index'
import { Vehicle } from '../src/models/Vehicle'
import { AdvertiseForSale } from '../src/models/AdvertiseForSale'
import { ChangeOfNumberplates } from '../src/models/ChangeOfNumberplate'
import { RoadWorthyTest } from '../src/models/RoadWorthyTest'

describe('Milage Calculator Tests', () => {
  const vehicle = new Vehicle({
    brand: 'potato',
    id: '123',
    registrationDate: new Date(),
    model: 'I dont know what',
    numberPlate: 'E2e3e3'
  })
  const events = [new AdvertiseForSale({
    date: new Date(),
    id: '123',
    mileageInKM: 20,
    price: 20,
    vehicleId: '123'
  })]

  it('calculated milage correctly', () => {
    expect(calculateAverageAnnualMileage(vehicle, events)).toBe(20)
  })
})
