import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Hero />
      </Main>
      <Footer />
    </>
  );
}

export default App;
