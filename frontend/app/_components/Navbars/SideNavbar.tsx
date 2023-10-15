'use client'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Item = {
  id: number
  href: string
  icon: any
  title: string
}

type Props = {
  items: Item[]
  toggle?: () => void
  opened?: boolean
}

const SideNavbar = ({ items, opened, toggle }: Props) => {
  const pathname = usePathname()
  const locations = pathname.split('/')

  return (
    <nav className={`${opened ? 'block' : 'hidden'} bg-white absolute h-screen z-10 w-screen md:w-fit md:block md:relative`}>
      <FontAwesomeIcon icon={faXmark} onClick={toggle} className="block md:hidden w-[30px] h-[30px]" />
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`flex items-center rounded-[10px] h-[50px] m-2 w-[200px] pl-2 ${
            `/${locations[1]}/${locations[2]}` === item.href ? 'text-white bg-primary' : 'text-darkGray bg-white'
          }`}
        >
          <FontAwesomeIcon className="w-[22px] h-[22px] mr-4 ml-2" icon={item.icon} />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}

export default SideNavbar
