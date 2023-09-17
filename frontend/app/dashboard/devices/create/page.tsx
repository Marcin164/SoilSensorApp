'use client'

import React from 'react'
import DeviceForm from '@/app/_components/Forms/DeviceForm'
import { createDevice } from '@/app/_services/deviceService'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const page = () => {
  const router = useRouter()

  const create = async (data: any) => {
    data.userId = '6451273b02c336b5e7c51345'
    data.isConnected = false
    const result = await createDevice(data)
    result?.status === 200 ? toast.success('Created successfully') : toast.error('Creation failed')
    router.push('/dashboard/devices')
  }

  return (
    <div className="w-[550px]">
      <DeviceForm create={true} save={create} />
    </div>
  )
}

export default page
