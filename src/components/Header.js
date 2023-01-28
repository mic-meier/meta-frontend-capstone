import Logo from "../assets/Logo.svg";

export default function Header({ children }) {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" />
      {children}
    </header>
  );
}