import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contactUs/ContactUs";
import Appointment from "./components/appointment/Appointment"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="appointment" element={<Appointment/>}/>
      </Routes>
      <ContactUs/>
      <Footer />
    </>
  );
}

export default App;
