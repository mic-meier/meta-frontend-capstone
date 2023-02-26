import { useState } from 'react'
import Button from './Button'

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('')
  const [bookingTime, setBookingTime] = useState(availableTimes[0])
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm({
      date,
      bookingTime,
      numberOfGuests,
      occasion,
    })
  }

  return (
    <form
      className="mx-auto my-12 grid max-w-sm font-leading"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className="mx-auto p-12 text-xl font-bold">Book Now</h1>
      <label htmlFor="res-date" className="">
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        className="mb-8"
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
          dispatch(e.target.value)
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        className="mb-8"
        onChange={(e) => setBookingTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        className="mb-8"
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        className="mb-8"
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <Button type="submit" variant="primary">
        Book Table{' '}
      </Button>
    </form>
  )
}
