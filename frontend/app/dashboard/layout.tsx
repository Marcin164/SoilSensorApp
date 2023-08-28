'use client'

import React, { useState, useEffect } from 'react'
import SideNavbar from '../_components/Navbars/SideNavbar'
import PageHeader from '../_components/Headers/PageHeader'
import { sidebarNavigationItems } from '../_constants/navigation'
import { useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      router.push('/login')
    }
  }, [])

  const toggleSideBar = () => {
    setSidebarOpen((prev) => !prev)
  }

  return (
    <div className="flex">
      <SideNavbar items={sidebarNavigationItems} opened={sidebarOpen} toggle={toggleSideBar} />
      <div className="w-full w-[calc(100%-216px)]">
        <PageHeader toggle={toggleSideBar} />
        <main className="px-4">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
