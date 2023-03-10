import { Link } from 'react-router-dom'

export default function Footer({ children }) {
  const LINKS = [
    { name: 'Home', to: '/' },
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Reservations', to: 'reservations' },
    { name: 'Order Online', to: 'order' },
    { name: 'Login', to: 'login' },
  ]

  return (
    <footer className="bg-green">
      <div className="mx-auto grid max-w-prose grid-cols-3 justify-between p-4 py-4 text-grey md:grid-cols-3 lg:max-w-screen-lg">
        <div className="">
          <ul className="list">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Link to={link.to} className="font-paragraph text-xs">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-paragraph text-xs">
          <p className="py-1">Address</p>
          <p className="py-1">Phone Number</p>
          <p className="py-1">email</p>
        </div>
        <div className="font-paragraph text-xs">
          <p className="py-1">Address</p>
          <p className="py-1">Phone Number</p>
          <p className="py-1">email</p>
        </div>
      </div>
    </footer>
  )
}
