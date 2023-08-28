import React from 'react'

type ButtonBorderedProps = {
  type?: 'button' | 'submit' | 'reset'
  text?: any
  children?: any
  className?: string
  onClick?: any
}

const ButtonBordered = ({ type = 'button', onClick, text, children, className }: ButtonBorderedProps) => {
  // change text || children to icon in props
  return (
    <button type={type} onClick={onClick} className={`block border-[1px] border-[#6E62E5] text-[#6E62E5] rounded-[10px] h-[40px] my-2 ${className}`}>
      {text || children}
    </button>
  )
}

export default ButtonBordered
