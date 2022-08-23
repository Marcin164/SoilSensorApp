import React from 'react'

type Props = {
    title?: string
    className?: string
    onClick?: () => any
}

const Button = (props: Props) => {
  return (
    <button className={`${props.className} block h-[60px] bg-primary-light font-bold text-white rounded text-[24px] shadow-2xl`} onClick={props.onClick}>{props.title}</button>
  )
}

export default Button