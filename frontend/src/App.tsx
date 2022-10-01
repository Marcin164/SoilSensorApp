import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Index"
import Login from "./Pages/Login";
import Map from "./Pages/Dashboard/Map"
import Devices from "./Pages/Dashboard/Devices";

function App() {
  useEffect(() => {

  }, [])
  
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path="map" element={<Map/>}/>
        <Route path="devices" element={<Devices/>}/>
      </Route>
    </Routes>
  );
}

export default App;
