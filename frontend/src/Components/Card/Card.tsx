import React from 'react'
import Image from '../Assets/Image'
import Header from '../Headers/Header'
import Icon from '../Assets/Icon'
import {
  faDroplet,
  faPercentage,
  faSignal,
  faTemperatureLow
} from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="w-[200px] bg-[#F9F9F9]">
      <Image src="" className="w-[200px] h-[200px]" />
      <div>
        <div className="flex">
          <div className="w-3/4">
            <Header title="Device 1" />
            <div className="text-[#727272] font-light text-[16px]">Peach</div>
          </div>
          <div className="w-1/4 grid grid-cols-2 justify-items-center content-center">
            <Icon icon={faSignal} className="p-[4px]" />
            <Icon icon={faTemperatureLow} className="p-[4px]" />
            <Icon icon={faPercentage} className="p-[4px]" />
            <Icon icon={faDroplet} className="p-[4px]" />
          </div>
        </div>
        <div className="text-[#727272] font-light text-[16px]">Wrocław, Grecka 29</div>
      </div>
    </div>
  )
}

export default Card
