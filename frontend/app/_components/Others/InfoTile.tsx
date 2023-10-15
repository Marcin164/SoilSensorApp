import React from 'react'

type Props = {
  title: string
  value: string
}

const InfoTile = ({ title, value }: Props) => {
  return (
    <div className="mt-2">
      <span className="text-mediumGray">{title}: </span>
      <span>{value}</span>
    </div>
  )
}

export default InfoTile
