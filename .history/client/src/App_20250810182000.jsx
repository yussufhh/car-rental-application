import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MyBookings from "./pages/MyBookings"
import Cars from "./pages/Cars"
import CarDetails from "./pages/CarDetails"
import Navbar from "./components/Navbar"


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

         <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails/>} />
        <Route path='/cars' element={<Cars />} />
         <Route path='/my-bookings' element={<MyBookings />} />
      </Routes>
      
    <Foo
      
    </>
  );
};

export default App;
