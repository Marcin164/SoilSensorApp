import React from 'react'

type Props = {}

const AlertBadge = (props: Props) => {
  return (
    <div className="w-[60px] h-[20px] rounded-full shadow-lg flex items-center">
      <div className="w-[6px] h-[6px] bg-[#FCBF23] rounded-full ml-2" />
      <div className="text-[#FCBF23] text-[10px] ml-2">Info</div>
    </div>
  )
}

export default AlertBadge
