import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  text: string
  className?: string
}

// type Variant = 'H2 body' | 'dddd' | 'fffff'

// function Typography({children, variant}: {children: ReactNode; variant: Variant}) {

//   return <div className={getFontStyle()}>
//     {children}
//   </div>

//   function getFontStyle() {
//     return 'fff'
//   }
// }

const Header = ({ text, className }: Props) => {
  return <div className={twMerge('text-almostBlack text-[24px] font-bold mt-2', `${className}`)}>{text}</div>
}

export default Header
