import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  onClick?: any
  text?: string
  className?: string
  icon?: any
  disabled?: boolean
}

const ButtonFilled = ({ type = 'button', onClick, text, icon, className, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`block text-[#FFFFFF] bg-[#6E62E5] rounded-[10px] h-[40px] my-2 px-2 disabled:bg-[#D9D9D9] ${className}`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  )
}

export default ButtonFilled
