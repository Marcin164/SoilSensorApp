import React, { useState } from 'react'
import TopbarNav from './TopbarNav'

type Props = {}

const Topbar = (props: Props) => {
  const [isDisplayed, setIsDisplayed] = useState(false)

  const toggleMenuDropdown = () => {
    setIsDisplayed(!isDisplayed)
  }

  return (
    <div className="w-full h-[50px]">
      <div className="w-fit h-full flex items-center justify-center float-left p-2"><span className="font-bold text-[32px] text-primary-dark">SoilSensor</span></div>
      <div className="relative float-right">
        <button className="w-[50px] h-[50px] mr-2" onClick={toggleMenuDropdown}>M</button>
        <div className={`bg-gray-100 z-10 absolute right-0 ${isDisplayed ? 'block' : 'hidden'}`}>
          <TopbarNav title="Mapa" link="/dashboard/map"/>
          <TopbarNav title="Urządzenia" link="/dashboard/devices"/>
          <TopbarNav title="Ustawienia" link="/dashboard/settings"/>
          <TopbarNav title="L" link="/dashboard/logout"/>
        </div>
      </div>
    </div>
  )
}

export default Topbar