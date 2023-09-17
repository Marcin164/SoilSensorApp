'use client'

import { faChartBar, faDroplet, faHistory, faInfoCircle, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { deviceNavigationItems } from '@/app/_constants/navigation'
import { useQuery } from 'react-query'
import { getDevices } from '@/app/_services/deviceService'

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  const [reload, setReload] = useState(false)
  const pathname = usePathname()
  const locations = pathname.split('/')
  const { data } = useQuery('devices', getDevices)

  useEffect(() => {
    setReload(!reload)
  }, [data])
  return (
    <div>
      <nav className="flex">
        {deviceNavigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center rounded-[10px] h-[40px] m-2 pl-2 pr-5 ${
              locations[4] === item.href ? 'text-[#FFFFFF] bg-[#6E62E5]' : 'text-[#4A4A4A] bg-[#FFFFFF]'
            }`}
          >
            <FontAwesomeIcon className="w-[22px] h-[22px] mr-4 ml-2" icon={item.icon} />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  )
}

export default layout
