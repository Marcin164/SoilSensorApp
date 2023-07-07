import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Main from './Pages/Main'
import Map from './Pages/Map'
import Devices from './Pages/Devices'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="devices" element={<Devices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
