import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  children?: any
  text?: string
  to: string
}

const NavItem = ({ children, text, to }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block w-[180px] h-[38px] text-[18px] py-auto pl-2 ${
          isActive ? ' border-l-2 border-[#609966] text-[#609966]' : 'border-0 text-[#2B2B2B]'
        }`
      }>
      {text || children}
    </NavLink>
  )
}

export default NavItem
