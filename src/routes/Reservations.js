import BookingForm from '../components/BookingForm'

export default function Reservations({ availableTimes, dispatch, submitForm }) {
  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  )
}
