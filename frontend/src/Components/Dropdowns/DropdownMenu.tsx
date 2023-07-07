import React from 'react'

type Props = {
  children: any
  isOpen: boolean
}

const DropdownMenu = ({ children, isOpen }: Props) => {
  if (!isOpen) {
    return null
  }

  return <div className="shadow-xl absolute right-0 bg-white z-[10000]">{children}</div>
}

export default DropdownMenu
