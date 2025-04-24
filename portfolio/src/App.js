import { HashRouter, Routes, Route} from "react-router-dom"
import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import Contact from "../src/Pages/Contact"
import Other from "../src/Pages/Other"
import Projects from "../src/Pages/Projects/Projects"
import Arduino from "../src/Pages/Arduino"
import Pong from "../src/Pages/Pong"
import ScrollToTop from "./Components/scrollToTop"
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/other" element={<Other />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/arduino" element={<Arduino />} />
          <Route path="/projects/pong" element={<Pong />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
