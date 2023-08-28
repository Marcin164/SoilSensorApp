import React from 'react'
import Badge from '../Badges/Badge'
import { faBottleDroplet, faDroplet, faTemperatureFull, faWifi } from '@fortawesome/free-solid-svg-icons'
import CardInfoIcon from './CardInfoIcon'

type Props = {}

const DeviceCard = (props: Props) => {
  return (
    <div className="w-[200px] h-[220px] border border-[#727272] rounded">
      <Badge text="Device 1" />
      <Badge text="Avocado" />
      <div className="ml-2 rounded-full border border-[#727272] w-[30px] flex flex-col items-center pt-1 mt-10">
        <CardInfoIcon icon={faTemperatureFull} />
        <CardInfoIcon icon={faDroplet} />
        <CardInfoIcon icon={faBottleDroplet} />
        <CardInfoIcon icon={faWifi} />
      </div>
    </div>
  )
}

export default DeviceCard
