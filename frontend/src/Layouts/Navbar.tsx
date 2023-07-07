import React from 'react'
import Logo from '../Assests/logo.png'
import Image from '../Components/Assets/Image'
import DropdownWrapper from '../Components/Dropdowns/DropdownWrapper'
import NavItem from '../Components/NavItems/NavItem'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="w-full h-[70px] flex justify-between px-2">
      <Image src={Logo} className="w-[50px] h-[50px] my-[10px]" />
      <DropdownWrapper>
        <NavItem text="Home" to="/dashboard/home" />
        <NavItem text="Map" to="/dashboard/map" />
        <NavItem text="Devices" to="/dashboard/devices" />
        <NavItem text="Settings" to="/dashboard/settings" />
      </DropdownWrapper>
    </nav>
  )
}

export default Navbar
