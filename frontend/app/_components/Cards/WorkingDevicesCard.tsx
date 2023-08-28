import React from 'react'

type Props = {}

const WorkingDevicesCard = (props: Props) => {
  return (
    <div className="inline-block rounded-xl border border-[#B6B6B6] w-[280px] h-[120px] px-4 py-2">
      <div className="font-semibold text-[#1C1C1C]">Working devices</div>
      <div className="text-[#059224] mt-2">
        <span className="font-bold">5</span> Connected
      </div>
      <div className="text-[#E85050] mt-2">
        <span className="font-bold">2</span> Disconnected
      </div>
    </div>
  )
}

export default WorkingDevicesCard
