import React, { useState } from 'react'
import DropdownToggle from './DropdownToggle'
import DropdownMenu from './DropdownMenu'

type Props = { children: any }

const DropdownWrapper = ({ children }: Props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const handleTogglingDropdown = () => {
    setToggleDropdown((prev) => !prev)
  }

  return (
    <div className="relative h-fit my-auto z-[10000]">
      <DropdownToggle onClick={handleTogglingDropdown} />
      <DropdownMenu isOpen={toggleDropdown}>{children}</DropdownMenu>
    </div>
  )
}

export default DropdownWrapper
