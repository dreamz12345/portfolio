import { HashRouter, Routes, Route} from "react-router-dom"
import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import Contact from "../src/Pages/Contact"
import Hobbies from "../src/Pages/Hobbies"
import Projects from "../src/Pages/Projects"
import Arduino from "../src/Pages/Arduino"


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/arduino" element={<Arduino />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
