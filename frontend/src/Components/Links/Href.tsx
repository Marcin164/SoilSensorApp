import React from 'react'

type Props = {
  url: string
  text?: string
  children?: any
  target?: string
}

const Href = ({ url = '#', text = '', target = '_blank', children }: Props) => {
  return (
    <a
      data-cy="href"
      className="my-8 ml-2 text-[#059224] text-[14px] font-light"
      href={url}
      target={target}>
      {text || children}
    </a>
  )
}

export default Href
