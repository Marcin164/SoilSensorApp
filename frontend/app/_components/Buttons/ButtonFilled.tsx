import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  onClick?: any
  text?: string
  className?: string
  icon?: any
  disabled?: boolean
}

const ButtonFilled = ({ type = 'button', onClick, text, icon, className, disabled = false }: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={twMerge('block text-white bg-primary rounded-[10px] h-[40px] my-2 px-2 disabled:bg-lightGray', className)}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  )
}

export default ButtonFilled
