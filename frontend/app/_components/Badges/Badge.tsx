import React from 'react'

type Props = {
  text: string
}

const Badge = ({ text }: Props) => {
  return <div className="text-[12px] text-darkGray font-light border border-mediumGray w-fit px-2 py-1 rounded-full mt-1 ml-2">{text}</div>
}

export default Badge
