import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bus from './components/Bus'
import Cabs from './components/Cabs'
import ErrorPage from './components/ErrorPage'
import Holidays from './components/Holidays'
import Homestay from './components/Homestay'
import Hotels from './components/Hotels'

function App() {
  return (
    <>
      <Routes>
        <Route path='/hotels' element={<Hotels />}  ></Route>
        <Route path='/holidays' element={<Holidays />} ></Route>
        <Route path='/homestays' element={<Homestay />} ></Route>
        <Route path='/bus' element={<Bus />} ></Route>
        <Route path='/cabs' element={<Cabs />} ></Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
