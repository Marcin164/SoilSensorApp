'use client'

import React, { useState, useEffect } from 'react'
import SideNavbar from '../_components/Navbars/SideNavbar'
import PageHeader from '../_components/Headers/PageHeader'
import { sidebarNavigationItems } from '../_constants/navigation'
import { useRouter } from 'next/navigation'
import { useQuery } from 'react-query'
import { getAccount } from '../_services/accountService'
import { getDevices } from '../_services/deviceService'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    !localStorage.getItem('accessToken') && router.push('/login')
  }, [])

  const user = useQuery('account', getAccount)
  useQuery('devices', getDevices)

  const toggleSideBar = () => {
    setSidebarOpen((prev) => !prev)
  }

  return (
    <div className="flex">
      <SideNavbar items={sidebarNavigationItems} opened={sidebarOpen} toggle={toggleSideBar} />
      <div className="w-[calc(100%-216px)]">
        <PageHeader toggle={toggleSideBar} name={user?.data?.name} surname={user?.data?.surname} />
        <main className="px-4">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
