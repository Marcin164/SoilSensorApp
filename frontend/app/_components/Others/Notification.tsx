import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

type Props = {
  className?: string
}

const Notification = ({ className = '' }: Props) => {
  return (
    <div className={`relative w-fit ${className}`}>
      <FontAwesomeIcon icon={faBell} className="w-[20px] h-[24px]" />
      <div className="w-[10px] h-[10px] bg-[#6E62E5] rounded-full absolute top-0 right-0" />
    </div>
  )
}

export default Notification
