import React from 'react'
import { faTemperatureFull } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  icon: any
}

const CardInfoIcon = ({ icon }: Props) => {
  return (
    <div className="w-[20px] h-[20px] rounded-full border border-[#059224] flex justify-center items-center mb-1">
      <FontAwesomeIcon icon={icon} className="text-[#059224]" />
    </div>
  )
}

export default CardInfoIcon
