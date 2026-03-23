import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Dashboard from "./pages/mainPages/Dashboard";
import About from "./pages/mainPages/About";
import Home from "./pages/mainPages/Home";
import Default from "./pages/mainPages/Default";
import HealthBars from "./components/HealthBars";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/healthbars" element={<HealthBars />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;