import React from 'react'

type Props = {
  title?: string
}

const Header = ({ title }: Props) => {
  return <div className="text-[#609966] text-[20px] font-bold">{title}</div>
}

export default Header
