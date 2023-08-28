import React from 'react'

type Props = {}

const WaterUsageCard = (props: Props) => {
  return (
    <div className="rounded-xl border border-[#B6B6B6] w-[280px] h-[120px] px-4 py-2 mt-2 lg:mt-0 lg:ml-4">
      <div className="font-semibold text-[#1C1C1C]">Water used today</div>
      <div className="text-[#6E62E5] font-semibold text-[32px]">58 litres</div>
      <div className="text-[12px] font-light">
        <span className="text-[#E85050]">-3,4 litres</span> vs yesterday
      </div>
    </div>
  )
}

export default WaterUsageCard
