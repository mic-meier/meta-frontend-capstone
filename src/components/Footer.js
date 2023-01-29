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
      <div className="justify-betweenp-4 mx-auto grid max-w-prose grid-cols-3 p-4 text-grey md:grid-cols-3 lg:max-w-screen-lg">
        <div className="">
          <ul className="list">
            {LINKS.map((link) => (
              <li>
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
