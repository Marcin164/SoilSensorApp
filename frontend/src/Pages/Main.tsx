import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Layouts/Navbar'

type Props = {}

const Main = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F9F9F9] h-[calc(100vh-70px)]">
        <Outlet />
      </div>
    </div>
  )
}

export default Main
