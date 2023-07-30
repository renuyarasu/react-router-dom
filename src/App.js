import "./App.css";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Header(){
  return(
    <ul className="nav-menu">
      <li> <Link to='/home'>Home</Link></li>
      <li> <Link to='/about'>About</Link></li>
      <li> <Link to='/contact'>Contact</Link></li>
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
