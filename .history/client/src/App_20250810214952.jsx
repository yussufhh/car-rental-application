import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MyBookings from "./pages/MyBookings"
import Cars from "./pages/Cars"
import CarDetails from "./pages/CarDetails"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Layout from './pages/owner/Layout';
import AddCar from "./pages/owner/AddCar"
import ManageCars from "./pages/owner/ManageCars"
import ManageBooking from 


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
        <Route path='/owner' element={<Layout/>}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
           <Route path='manage-cars' element={<ManageCars/>}/>
                <Route path='manage-bookings' element={<ManageBookings/>}/>
         </Route>
      </Routes>
      {!isOwnerPath && <Footer/>}
    
      
    </>
  );
};

export default App;
