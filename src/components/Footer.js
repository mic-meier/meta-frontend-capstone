import Logo from "../assets/Logo.svg";

export default function Footer({ children }) {
  return (
    <footer className="footer">
      <img src={Logo} alt="Little Lemon Logo" />
      <div className="footer-section">
        <h6>Nav</h6>
        <ul className="list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservation</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h6>Contact</h6>
        <p>Address</p>
        <p>Phone Number</p>
        <p>email</p>
      </div>
      <div className="footer-section">
        <h6>Social Media Links</h6>
        <p>Address</p>
        <p>Phone Number</p>
        <p>email</p>
      </div>
    </footer>
  );
}
