import type { Meta, StoryObj } from '@storybook/react'
import SideNavbar from '../app/_components/Navbars/SideNavbar'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const meta: Meta<typeof SideNavbar> = {
  component: SideNavbar,
}

export default meta
type Story = StoryObj<typeof SideNavbar>

const items = [
  {
    id: 1,
    href: '#',
    title: 'title1',
    icon: faInfoCircle,
  },
  {
    id: 2,
    href: '#',
    title: 'title2',
    icon: faInfoCircle,
  },
]

export const Primary: Story = {
  render: () => <SideNavbar items={items} toggle={() => {}} opened />,
}
