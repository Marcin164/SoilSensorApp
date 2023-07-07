import React from 'react'

type Props = {
  title?: string
}

const WidgetHeader = ({ title }: Props) => {
  return <div className="text-[#609966] text-center text-[20px]">{title}</div>
}

export default WidgetHeader
