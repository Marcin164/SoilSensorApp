import React from 'react'
import { RadialBarChart, Tooltip, ResponsiveContainer, RadialBar } from 'recharts'

type Props = {
  labelFill?: string
  labelPosition?: any
  valueKey: string
  startAngle?: number
  endAngle?: number
  innerRadius?: string
  outerRadius?: string
  data: any[]
  width?: string | number
  height?: string | number
}

const RadialChartWrapper = ({
  labelFill = '#1C1C1C',
  labelPosition = 'insideStart',
  valueKey,
  startAngle = 180,
  endAngle = 0,
  innerRadius = '0%',
  outerRadius = '100%',
  data,
  width = '100%',
  height = '100%',
}: Props) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RadialBarChart data={data} startAngle={startAngle} endAngle={endAngle} innerRadius={innerRadius} outerRadius={outerRadius}>
        <Tooltip />
        <RadialBar label={{ fill: labelFill, position: labelPosition }} background dataKey={valueKey} />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default RadialChartWrapper
