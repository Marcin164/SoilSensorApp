import Header from './Header'
import Notification from '../Others/Notification'
import AccountBadge from '../Badges/AccountBadge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

type Props = {
  toggle: any
}

const PageHeader = ({ toggle }: Props) => {
  return (
    <div className="w-full flex justify-between px-4 items-center h-[100px]">
      <Header text="Hello again, Marcin" className="hidden md:block mt-0" />
      <FontAwesomeIcon icon={faBars} className="md:hidden w-[30px] h-[20px]" onClick={toggle} />
      <div className="flex items-center">
        <Notification className="mr-[10px] md:mr-[30px]" />
        <AccountBadge />
      </div>
    </div>
  )
}

export default PageHeader
