import { calculateAverageAnnualMileage, estimateCurrentMileage } from '../src/index'
import { convertMillisecondsToYears } from '../src/helpers/convert-ms-to-years'
const dummyEvents = [
  {
    type: 'RoadWorthyTest',
    date: '2020-4-10',
    mileageInKM: 80000,
    result: 'PASS'
  },
  {
    type: 'AdvertiseForSale',
    date: '2019-4-10',
    mileageInKM: 70000,
    price: 12000
  },
  {
    type: 'ChangeOfNumberplates',
    date: '2018-5-10',
    fromNumberPlate: '123',
    toNumberPlate: '321'
  },
  {
    type: 'RoadWorthyTest',
    date: '2018-4-10',
    mileageInKM: 60000,
    result: 'PASS'
  },
  {
    type: 'RoadWorthyTest',
    date: '2017-4-10',
    mileageInKM: 50000,
    result: 'PASS'
  },
  {
    type: 'RoadWorthyTest',
    date: '2016-4-10',
    mileageInKM: 40000,
    result: 'PASS'
  },
  {
    type: 'RoadWorthyTest',
    date: '2015-4-10',
    mileageInKM: 30000,
    result: 'FAIL'
  },
  {
    type: 'RoadWorthyTest',
    date: '2014-4-10',
    mileageInKM: 20000,
    result: 'PASS'
  }
  {
    type: 'RoadWorthyTest',
    date: '2013-4-10',
    mileageInKM: 10000,
    result: 'PASS'
  }
]

describe('Milage Calculator Tests', () => {
  
  it('calculates annual average mileage correctly', () => {
    expect(calculateAverageAnnualMileage(dummyEvents)).toBe(10000)
  })

  it('estimates current mileage correctly', () => {
    const averageAnnualMileage = 10000
    const timeDifference = convertMillisecondsToYears(Date.now() - new Date(dummyEvents[0].date).getTime())
    expect(estimateCurrentMileage(dummyEvents)).toBe(averageAnnualMileage * timeDifference)
  })
})
