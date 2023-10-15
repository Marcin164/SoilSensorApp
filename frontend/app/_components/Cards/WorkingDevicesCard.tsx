import React from 'react'

type Props = {}

const WorkingDevicesCard = (props: Props) => {
  return (
    <div className="inline-block rounded-xl border border-lightGray w-[280px] h-[120px] px-4 py-2">
      <div className="font-semibold text-almostBlack">Working devices</div>
      <div className="text-success mt-2">
        <span className="font-bold">5</span> Connected
      </div>
      <div className="text-danger mt-2">
        <span className="font-bold">2</span> Disconnected
      </div>
    </div>
  )
}

export default WorkingDevicesCard
