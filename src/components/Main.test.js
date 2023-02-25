import { initializeTimes, times, updateTimes } from './Main'

test('initializeTimes returns the correect list of time slots available', () => {
  const initialTimes = initializeTimes()
  expect(initialTimes).toEqual(times)
})

test('updateTimes returns the correct time slots', () => {
  const updatedTimes = updateTimes(times)
  expect(updatedTimes).toEqual(times)
})
