import Image from 'next/image'
import React from 'react'

type Props = {
  className?: string
}

const AccountBadge = ({ className = '' }: Props) => {
  return (
    <div className={`flex items-center w-[130px] md:w-[250px] h-[50px] rounded-full shadow ${className}`}>
      <Image className="w-[40px] h-[40px] rounded-full mx-[10px]" src="" alt="" />
      <span className="truncate">Marcin Nowakowski</span>
    </div>
  )
}

export default AccountBadge
