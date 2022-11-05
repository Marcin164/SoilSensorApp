import React, { useState } from 'react'
import Button from '../../Components/Common/Button'
import DeviceCard from '../../Components/DeviceCard'
import Input from '../../Components/Common/Input'
import Modal from "../../Components/Common/Modal"
import { useSelector } from 'react-redux'
import DeviceCreateForm from '../../Components/DeviceCreateForm'

type Props = {}

const Devices = (props: Props) => {
  const [isModalOpened, setIsModalOpened] = useState<Boolean>(false)

  const devices = useSelector((state: any) => (state.devices))

  const toggleAddDeviceModal = () => {
    setIsModalOpened(!isModalOpened)
  }

  return (
    <div className="w-full">
        <div className="flex items-center justify-around pt-4">
            <Input className="" placeholder="Szukaj..."/>
            <Button className="w-[60px]" title="+" onClick={toggleAddDeviceModal}/>
            <Modal header="Add device" isShowed={isModalOpened} toggle={toggleAddDeviceModal}>
              <DeviceCreateForm/>
            </Modal>
        </div>
        <div className="w-full flex flex-col items-center">
            {devices && devices.map((device: any) => (
              <DeviceCard id={device.id} name={device.name} isConnected={device.isConnected} soilMoisture={device.soilType} temperature={19} lastWatering="18.08.2022, 18:49"/>
            ))}
        </div>
    </div>
  )
}

export default Devices