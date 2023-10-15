import React from 'react'

type Props = {}

const WaterUsageCard = (props: Props) => {
  return (
    <div className="rounded-xl border border-mediumGray w-[280px] h-[120px] px-4 py-2 mt-2 lg:mt-0 lg:ml-4">
      <div className="font-semibold text-almostBlack">Water used today</div>
      <div className="text-primary font-semibold text-[32px]">58 litres</div>
      <div className="text-[12px] font-light">
        <span className="text-danger">-3,4 litres</span> vs yesterday
      </div>
    </div>
  )
}

export default WaterUsageCard
