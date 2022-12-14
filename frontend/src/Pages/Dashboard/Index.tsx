import React from 'react'
import { Outlet } from 'react-router'
import Topbar from '../../Components/Topbar'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="w-screen">
      <Topbar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
