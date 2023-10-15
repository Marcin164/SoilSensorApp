import React from 'react'

type Props = {
  type?: 'success' | 'warning' | 'danger' | 'info'
  text?: string
}

const AlertBadge = ({ type = 'info', text }: Props) => {
  return (
    <div className="w-[60px] h-[20px] rounded-full shadow-lg flex items-center">
      <div className={`w-[6px] h-[6px] bg-${type} rounded-full ml-2`} />
      <div className={`text-${type} text-[10px] ml-2`}>{text}</div>
    </div>
  )
}

export default AlertBadge
