import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import HealthBars from "./pages/mainPages/HealthBars";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HealthBars />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;