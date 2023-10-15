import React from 'react'
import Badge from '../Badges/Badge'
import { faBottleDroplet, faDroplet, faTemperatureFull, faWifi } from '@fortawesome/free-solid-svg-icons'
import CardInfoIcon from './CardInfoIcon'
import Link from 'next/link'

type Props = {
  name: string
  plant: string
  _id: string
}

const DeviceCard = ({ plant, name, _id }: Props) => {
  return (
    <Link href={`/dashboard/devices/${_id}/general`} className="w-[200px] h-[220px] border border-mediumGray rounded-xl">
      <Badge text={name} />
      <Badge text={plant} />
      <div className="ml-2 rounded-full border border-mediumGray w-[30px] flex flex-col items-center pt-1 mt-10">
        <CardInfoIcon icon={faTemperatureFull} />
        <CardInfoIcon icon={faDroplet} />
        <CardInfoIcon icon={faBottleDroplet} />
        <CardInfoIcon icon={faWifi} />
      </div>
    </Link>
  )
}

export default DeviceCard
