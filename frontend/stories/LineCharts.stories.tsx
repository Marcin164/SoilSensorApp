import type { Meta, StoryObj } from '@storybook/react'
import LineChartWrapper from '../app/_components/Charts/LineChart'

const meta: Meta<typeof LineChartWrapper> = {
  component: LineChartWrapper,
}

export default meta
type Story = StoryObj<typeof LineChartWrapper>

const data = [
  {
    humidity: 324,
    time: 14,
  },
  {
    humidity: 466,
    time: 15,
  },
]

export const Primary: Story = {
  render: () => <LineChartWrapper width={500} height={220} data={data} xKey="time" yKey="humidity" />,
}

export const Width: Story = {
  render: () => <LineChartWrapper width={700} height={220} data={data} xKey="time" yKey="humidity" />,
}

export const Height: Story = {
  render: () => <LineChartWrapper width={500} height={420} data={data} xKey="time" yKey="humidity" />,
}

export const YAxis: Story = {
  render: () => <LineChartWrapper yAxis width={500} height={220} data={data} xKey="time" yKey="humidity" />,
}

export const Tooltip: Story = {
  render: () => <LineChartWrapper tooltip width={500} height={220} data={data} xKey="time" yKey="humidity" />,
}

export const StrokeColor: Story = {
  render: () => <LineChartWrapper strokeColor="#FF0000" width={500} height={220} data={data} xKey="time" yKey="humidity" />,
}
