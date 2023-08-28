import { faHouse, faMap, faTemperature0, faGear, faChartBar, faHistory, faUser } from '@fortawesome/free-solid-svg-icons'

export const sidebarNavigationItems = [
  {
    id: 1,
    title: 'Home',
    href: '/dashboard/home',
    icon: faHouse,
  },
  {
    id: 2,
    title: 'Map',
    href: '/dashboard/map',
    icon: faMap,
  },
  {
    id: 3,
    title: 'Devices',
    href: '/dashboard/devices',
    icon: faTemperature0,
  },
  {
    id: 4,
    title: 'Settings',
    href: '/dashboard/settings',
    icon: faGear,
  },
  {
    id: 5,
    title: 'Reports',
    href: '/dashboard/reports',
    icon: faChartBar,
  },
  {
    id: 6,
    title: 'History',
    href: '/dashboard/history',
    icon: faHistory,
  },
  {
    id: 7,
    title: 'Account',
    href: '/dashboard/account',
    icon: faUser,
  },
]
