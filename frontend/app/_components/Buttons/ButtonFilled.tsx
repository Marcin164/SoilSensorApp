import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  onClick?: any
  text?: string
  className?: string
  icon?: any
}

const ButtonFilled = ({ type = 'button', onClick, text, icon, className }: Props) => {
  return (
    <button type={type} onClick={onClick} className={`block text-[#FFFFFF] bg-[#6E62E5] rounded-[10px] h-[40px] my-2 px-2 ${className}`}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  )
}

export default ButtonFilled
