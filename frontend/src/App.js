import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Courses from './components/Pages/Courses';
import Blog from './components/Pages/Blog';
import Profile from './components/Pages/Profile';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register'; // Added Register Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Added Register Route */}
      </Routes>
    </Router>
  );
}

export default App;
