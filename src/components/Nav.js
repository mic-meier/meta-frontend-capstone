import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { forwardRef, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

const LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: 'about' },
  { name: 'Menu', to: 'menu' },
  { name: 'Reservations', to: 'reservations' },
  { name: 'Order Online', to: 'order' },
  { name: 'Login', to: 'login' },
]

const NavLink = ({ href, children }) => {
  return (
    <div className="px-5 py-2">
      <Link to={href} className="font-leading font-medium hover:text-yellow">
        {children}
      </Link>
    </div>
  )
}

const NavMobileLink = forwardRef((props, ref) => {
  const { href, children } = props
  return (
    <div className="list-none border-b border-green bg-white py-2">
      <Link
        to={href}
        className="underlined px-5vw block whitespace-nowrap py-9 text-center font-leading text-lg font-medium"
        ref={ref}
      >
        {children}
      </Link>
    </div>
  )
})

const MobileMenu = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <div>
            <Popover.Button>
              {open ? (
                <Bars3Icon className="-mb-1 h-7 w-7 rotate-90 transform text-green " />
              ) : (
                <Bars3Icon className="-mb-1 h-7 w-7 text-green" />
              )}
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute right-0 z-50 -mr-4 mt-4 h-screen w-screen border-t border-green bg-white">
              {LINKS.map((link) => (
                <Popover.Button
                  as={NavMobileLink}
                  key={link.name}
                  href={link.to}
                >
                  {link.name}
                </Popover.Button>
              ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default function NavBar() {
  return (
    <header className="pt-6 pb-2">
      <nav className="mx-auto flex items-center justify-between p-4 lg:max-w-screen-lg">
        <div className="py-2 pr-2 text-2xl lg:text-4xl">
          <Link to="/">
            <img src={Logo} alt="Little Lemon Logo" />
          </Link>
        </div>
        <div>
          <div className="hidden lg:flex">
            {LINKS.map((link) => (
              <NavLink key={link.to} href={link.to}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}
