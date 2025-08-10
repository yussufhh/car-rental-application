import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

         <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={< CarDeta/>} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />
      </Routes>
    </>
  );
};

export default App;
