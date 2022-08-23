import React from 'react'
import Button from '../../Components/Button'
import DeviceCard from '../../Components/DeviceCard'
import Input from '../../Components/Input'

type Props = {}

const Devices = (props: Props) => {
  return (
    <div className="w-full">
        <div className="flex items-center justify-around pt-4">
            <Input className="" placeholder="Szukaj..."/>
            <Button className="w-[60px]" title="+"/>
        </div>
        <div className="w-full flex flex-col items-center pt-8">
            <DeviceCard id="43dflks343laot932" name="Pomidory" isConnected={1} soilMoisture={496} temperature={19} lastWatering="18.08.2022, 18:49"/>
        </div>
    </div>
  )
}

export default Devices