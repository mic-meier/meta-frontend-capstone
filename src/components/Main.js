import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home, Login, Menu, Order, Reservations } from '../routes'

export default function Main({ children }) {
  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ])

  return (
    <main className="text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route
          path="reservations"
          element={<Reservations availableTimes={availableTimes} />}
        />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </main>
  )
}
