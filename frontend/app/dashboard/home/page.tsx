import ProblemsCard from '@/app/_components/Cards/ProblemsCard'
import WaterUsageCard from '@/app/_components/Cards/WaterUsageCard'
import WorkingDevicesCard from '@/app/_components/Cards/WorkingDevicesCard'
import Header from '@/app/_components/Headers/Header'
import Table from '@/app/_components/Table/Table'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="xl:float-left">
        <Header text="Devices problems" />
        <ProblemsCard />
        <Header text="General" />
        <div className="lg:flex">
          <WorkingDevicesCard />
          <WaterUsageCard />
        </div>
        <Header text="Events history" />
        <Table data={[]} />
        <div className="text-[#6E62E5] text-[20px] font-medium text-center mt-2">Show full history</div>
      </div>
      <div className="xl:float-right w-[400px]">
        <Header text="Weather" />
        <div className="flex">
          <Image src="" alt="" className="w-[40px] h-[40px]" />
          <div className="text-[24px] text-[#2B2B2B] ml-4">Wiejska, Wrocław</div>
        </div>
      </div>
    </div>
  )
}

export default page
