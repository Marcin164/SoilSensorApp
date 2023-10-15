import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonBorderedProps = {
  type?: 'button' | 'submit' | 'reset'
  text?: string
  icon?: any
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const ButtonBordered = ({ type = 'button', onClick, text, icon, className, disabled = false }: ButtonBorderedProps) => {
  // change text || children to icon in props
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={twMerge(
        'block border-[1px] border-primary text-primary rounded-[10px] h-[40px] my-2 px-2 disabled:border-lightGray disabled:text-lightGray',
        className,
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  )
}

export default ButtonBordered
