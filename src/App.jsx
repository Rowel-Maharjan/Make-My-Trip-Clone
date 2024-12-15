import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bus from './components/Bus/Bus'
import Cabs from './components/Cabs/Cabs'
import ErrorPage from './components/ErrorPage'
import Holidays from './components/Holidays/Holidays'
import Homestay from './components/Homestay/Homestay'
import Hotels from './components/Hotels/Hotels'
import Layout from './components/Layout'
import React from 'react';
import HotelListing from './components/Hotels/HotelListing'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Hotels />}></Route>
          <Route path='hotels' element={<Hotels />}></Route>
          <Route path='holidays' element={<Holidays />} ></Route>
          <Route path='homestays' element={<Homestay />} ></Route>
          <Route path='bus' element={<Bus />} ></Route>
          <Route path='cabs' element={<Cabs />} ></Route>
        </Route>
        <Route path='hotels/hotel-listing' element={<HotelListing />} ></Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
