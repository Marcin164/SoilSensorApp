import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

type Props = {
  data: any[]
  yAxis?: boolean
  tooltip?: boolean
  strokeColor?: string
  yKey: string
  xKey: string
  width?: string | number
  height?: string | number
}

const LineChartWrapper = ({ data, yAxis = false, tooltip = false, strokeColor = '#6E62E5', yKey, xKey, width = '100%', height = '100%' }: Props) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data}>
        <XAxis dataKey={xKey} />
        {yAxis && <YAxis />}
        {tooltip && <Tooltip />}
        <Line type="monotone" dataKey={yKey} stroke={strokeColor} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartWrapper
