import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './Components/home';
import About from './Components/about';
import Project from './Components/project';
import Achievements from './Components/achievements';
import NavBar from './Components/header';
import Footer from './Components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
