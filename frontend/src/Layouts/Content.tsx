import React from 'react'

type Props = {
  children: any
}

const Content = ({ children }: Props) => {
  return <div className="container mx-2 bg-[#FFFFFF]">{children}</div>
}

export default Content
