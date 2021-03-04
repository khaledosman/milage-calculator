import {
  IAdvertiseForSale,
  IRoadWorthyTest,
  IChangeOfNumberplate
} from './interfaces/interfaces'
import { convertMillisecondsToYears } from './helpers/convert-ms-to-years'

type AllEvents = IAdvertiseForSale | IRoadWorthyTest | IChangeOfNumberplate

export function calculateAverageAnnualMileage (events: Array<AllEvents>): number {
  const filteredEvents = filterIrrelevantEvents(events)
  const yearToMileageMap = constructYearToMileageMap(filteredEvents)
  const years = Object.keys(yearToMileageMap)

  // sums the mile differences between each year and the previous one
  const sumOfMileageDifferences = years.reduce((accum, year, index) => {
    if (index === 0) {
      return accum + yearToMileageMap[year]
    } else {
      const years = Object.keys(yearToMileageMap)
      const previousEntryIndex = years.findIndex((key) => key === year) - 1
      const previousEntry = years[previousEntryIndex]
      return accum + (yearToMileageMap[year] - (yearToMileageMap[previousEntry]))
    }
  }, 0)

  const averageAnnualMileage: number = years.length ? (sumOfMileageDifferences / years.length) : 7900
  return averageAnnualMileage
}

const filterIrrelevantEvents = (events:Array<AllEvents>): Array<IAdvertiseForSale | IRoadWorthyTest> => {
  return events.filter(event => event.type !== 'ChangeOfNumberplates') as Array<IRoadWorthyTest | IAdvertiseForSale>
}

const constructYearToMileageMap = (events: Array<IAdvertiseForSale | IRoadWorthyTest>): {[key:string]: number} => {
  return events.reduce((accum, event) => {
    const year = new Date(event.date).getFullYear()
    return {
      ...accum,
      [year]: Math.max((accum[year] || 0), event.mileageInKM) // save the most recent / highest mileage reported for each year
    }
  }, {})
}

export function estimateCurrentMileage (events: Array<AllEvents>): number {
  const averageAnnualMileage = calculateAverageAnnualMileage(events)
  const sortedEvents = events.sort((a: AllEvents, b: AllEvents) => b.date - a.date) // sort events descendingly
  const mostRecentEvent = filterIrrelevantEvents(sortedEvents)[0] // project from the most recent event with a mileage
  const timeDifferenceInYears = convertMillisecondsToYears(Date.now() - new Date(mostRecentEvent.date).getTime()) // averageMileagePerYear * numberOfYearsSinceLastEvent = estimate
  return timeDifferenceInYears * averageAnnualMileage
}
