import Logo from "../assets/Logo.svg";

export default function Footer({ children }) {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />
      <div>
        <h6>Nav</h6>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h6>Contact</h6>
        <p>Address</p>
        <p>Phone Number</p>
        <p>email</p>
      </div>
      <div>
        <h6>Social Media Links</h6>
        <p>Address</p>
        <p>Phone Number</p>
        <p>email</p>
      </div>
    </footer>
  );
}
