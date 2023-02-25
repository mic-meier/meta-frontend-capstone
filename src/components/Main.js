import { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home, Login, Menu, Order, Reservations } from '../routes'

export const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

export const initializeTimes = () => times

export const updateTimes = (state) => state

export default function Main({ children }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <main className="text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route
          path="reservations"
          element={
            <Reservations availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </main>
  )
}
