'use client'

import React, { createContext, useContext } from 'react'
import DeviceForm from '@/app/_components/Forms/DeviceForm'
import Header from '@/app/_components/Headers/Header'
import InfoTile from '@/app/_components/Others/InfoTile'
import { useParams } from 'next/navigation'
import { useQueryClient } from 'react-query'
import { removeDevice, updateDevice } from '@/app/_services/deviceService'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'

const page = () => {
  const router = useRouter()
  const params = useParams()
  const queryClient = useQueryClient()
  const devices: any = queryClient.getQueryData('devices')

  if (!devices) return null
  const device = devices.find((obj: any) => obj._id === params.id)

  const update = async (data: any) => {
    const result: any = await updateDevice(data)

    result?.status === 200 ? toast.success('Updated successfully') : toast.error('Updated failed')
  }

  const remove = async () => {
    const result = await removeDevice(device._id)

    result?.status === 200 ? toast.info('Deleted successfully') : toast.error('Updated failed')
    router.push('/dashboard/devices')
  }

  return (
    <div>
      <div className="w-[550px] float-left">
        <Header text="Details" />
        <DeviceForm device={device} remove={remove} save={update} create={false} />
      </div>
      <div className="float-left pl-10">
        <Header text="Info" />
        <InfoTile title="Added" value={dayjs(device.createdAt).format('DD.MM.YYYY, HH:mm')} />
        <InfoTile title="Last update" value={dayjs(device.updatedAt).format('DD.MM.YYYY, HH:mm')} />
        <InfoTile title="Amount of waterings" value={device.amountOfWaterings} />
        <InfoTile title="Connection state" value={device.isConnected ? 'Connected' : 'Disconnected'} />
      </div>
    </div>
  )
}

export default page
