import Header from './Header'
import Notification from '../Others/Notification'
import AccountBadge from '../Badges/AccountBadge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LoadingIndicator from '../Loaders/LoadingIndicator'

type Props = {
  toggle: any
  name?: string
  surname?: string
}

const PageHeader = ({ toggle, name, surname }: Props) => {
  return (
    <div className="w-full flex justify-between px-4 items-center h-[100px]">
      {name ? <Header text={`Hello again, ${name}`} className="hidden md:block mt-0" /> : <LoadingIndicator />}
      <FontAwesomeIcon icon={faBars} className="md:hidden w-[30px] h-[20px]" onClick={toggle} />
      <div className="flex items-center">
        <Notification className="mr-[10px] md:mr-[30px]" />
        <AccountBadge name={name} surname={surname} />
      </div>
    </div>
  )
}

export default PageHeader
