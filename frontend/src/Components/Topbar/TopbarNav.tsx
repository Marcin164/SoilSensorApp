import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    title?: string
    className?: string
    src?: string
    link: string
}

const TopbarNav = (props: Props) => {
  return (
    <Link to={props.link}>
      <div className="w-[200px] h-[40px] flex items-center justify-center">
          <img src={props.src} alt={props.src} className={`${props.className}`}/>
          <span className="text-primary-dark text-[22px]">{props.title}</span>
      </div>
    </Link>
  )
}

export default TopbarNav