'use client'

import React from 'react'
import ButtonFilled from '@/app/_components/Buttons/ButtonFilled'
import DeviceCard from '@/app/_components/Cards/DeviceCard'
import Header from '@/app/_components/Headers/Header'
import { useQuery } from 'react-query'
import { getDevices } from '@/app/_services/deviceService'
import { groupByTwoKeys } from '@/app/_helpers/array'
import Link from 'next/link'

const page = () => {
  const result: any = useQuery('devices', getDevices)
  const groupedByCity = groupByTwoKeys(result.data, 'city', 'street')

  return (
    <div>
      <Link href="devices/create">
        <ButtonFilled text="Add device" />
      </Link>
      {Object.entries(groupedByCity).map(([city, streetData]) => {
        return Object.entries(streetData).map(([street, data]) => {
          return (
            <>
              <Header text={`${street}, ${city}`} />
              <div className="grid grid-cols-6 gap-2">
                {data.map((datum: any) => {
                  return <DeviceCard {...datum} />
                })}
              </div>
            </>
          )
        })
      })}
    </div>
  )
}

export default page
