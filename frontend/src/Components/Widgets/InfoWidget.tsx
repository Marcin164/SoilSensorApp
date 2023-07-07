import React from 'react'
import WidgetHeader from '../Headers/WidgetHeader'

type Props = {
  title?: string
}

const InfoWidget = ({ title }: Props) => {
  return (
    <div className="w-[200px] h-[300px] bg-[#FFFFFF] shadow-xl rounded mx-2 pt-2 mb-3">
      <WidgetHeader title={title} />
    </div>
  )
}

export default InfoWidget
