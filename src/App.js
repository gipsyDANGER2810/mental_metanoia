<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
=======
import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Login from './components/login/Login'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
<Navbar></Navbar>
      <Login></Login>

{/* <div className="footer">
      <Footer></Footer>

</div> */}
    </div>
>>>>>>> e8442b35db882592592c956fc7a50588bf79e4a4
  );
}

export default App;
