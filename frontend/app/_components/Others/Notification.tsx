import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const Notification = ({ className = '' }: Props) => {
  return (
    <div className={twMerge('relative w-fit', `${className}`)}>
      <FontAwesomeIcon icon={faBell} className="w-[20px] h-[24px]" />
      <div className="w-[10px] h-[10px] bg-primary rounded-full absolute top-0 right-0" />
    </div>
  )
}

export default Notification
