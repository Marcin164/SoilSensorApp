import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Index"
import Login from "./Pages/Login";
import Map from "./Pages/Dashboard/Map"
import Devices from "./Pages/Dashboard/Devices";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import {Creators as DevicesActions} from '../src/Redux/actions/devices'

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [cookies] = useCookies<any>(['login']);

  useEffect(() => {
    dispatch(DevicesActions.fetchStart())
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path="map" element={<Map/>}/>
        <Route path="devices" element={<Devices/>}/>
      </Route>
    </Routes>
  );
}

export default App;
