import React from 'react'
import ButtonFilled from '@/app/_components/Buttons/ButtonFilled'
import DeviceCard from '@/app/_components/Cards/DeviceCard'
import Header from '@/app/_components/Headers/Header'

const page = () => {
  return (
    <div>
      <ButtonFilled text="Add device" />
      <Header text="Wiejska, Wrocław" />
      <div>
        <DeviceCard />
      </div>
    </div>
  )
}

export default page
