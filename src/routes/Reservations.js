import BookingForm from '../components/BookingForm'

export default function Reservations({ availableTimes, dispatch }) {
  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
}
