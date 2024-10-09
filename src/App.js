import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Home from "./pages/Home";
import Inquiries from "./pages/Inquiries";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/inquiries" element={<Inquiries />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
