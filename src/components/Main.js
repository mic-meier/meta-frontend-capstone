import { useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { fetchAPI, submitAPI } from '../api'
import { About, Home, Login, Menu, Order, Reservations } from '../routes'
import ConfirmedBooking from '../routes/ConfirmedBooking'

export const initializeTimes = () => fetchAPI(new Date())

export const updateTimes = (state, action) => {
  const timeSlots = fetchAPI(new Date(action))
  return timeSlots
}

export default function Main({ children }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  const navigate = useNavigate()

  const submitForm = (formData) => {
    const result = submitAPI(formData)

    if (result) navigate('confirmed')
  }

  return (
    <main className="text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route
          path="reservations"
          element={
            <Reservations
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
        <Route path="confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  )
}
