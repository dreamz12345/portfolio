import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import Contact from "../src/Pages/Contact"
import Hobbies from "../src/Pages/Hobbies"
import Projects from "../src/Pages/Projects"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
