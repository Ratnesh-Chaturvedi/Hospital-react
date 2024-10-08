import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import About from "./Pages/About";
import MyProfile from "./Pages/MyProfile";
import MyAppointment from "./Pages/MyAppointment";
import Appointment from "./Appointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className=" mx-4 sm:mx-[10%]">
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;