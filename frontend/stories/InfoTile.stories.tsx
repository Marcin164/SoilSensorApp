import type { Meta, StoryObj } from '@storybook/react'
import InfoTile from '../app/_components/Others/InfoTile'

const meta: Meta<typeof InfoTile> = {
  component: InfoTile,
}

export default meta
type Story = StoryObj<typeof InfoTile>

export const Primary: Story = {
  render: () => <InfoTile title="title" value="value" />,
}
