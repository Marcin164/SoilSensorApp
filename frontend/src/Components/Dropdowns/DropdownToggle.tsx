import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Assets/Icon'

type Props = {
  onClick: () => any
  className?: string
}

const DropdownToggle = ({ onClick, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`w-[40px] h-[40px] border-[1px] border-[#727272] rounded flex justify-center items-center z-[1000] ${className}`}>
      <Icon icon={faBars} size="2x" />
    </div>
  )
}

export default DropdownToggle
