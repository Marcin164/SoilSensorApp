import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
  icon: any
  size?: SizeProp
  color?: string
  className?: string
}

const Icon = ({ icon, size, color = '#727272', className = '' }: Props) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} className={className} />
}

export default Icon
