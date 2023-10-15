import React from 'react'
import { faTemperatureFull } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  icon: any
  type?: 'success' | 'warning' | 'danger'
}

const CardInfoIcon = ({ icon, type = 'warning' }: Props) => {
  return (
    <div className={`w-[20px] h-[20px] rounded-full border border-${type} flex justify-center items-center mb-1`}>
      <FontAwesomeIcon icon={icon} className={`text-${type}`} />
    </div>
  )
}

export default CardInfoIcon
