import React from 'react'

type Props = {
  onClick?: any
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string
  text?: string
  id?: string
  disabled?: boolean
}

const ButtonFilled = ({
  onClick,
  type = 'button',
  className = '',
  text = '',
  id,
  disabled = false
}: Props) => {
  return (
    <div className="mx-2 mt-2">
      <button
        className={`${className} bg-[#609966] h-[40px] mt-2 text-[#FFFFFF] text-[20px] rounded-md`}
        onClick={onClick}
        type={type}
        id={id}
        disabled={disabled}>
        {text}
      </button>
    </div>
  )
}

export default ButtonFilled
