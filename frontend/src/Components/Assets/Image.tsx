import React from 'react'

type Props = {
  src: string
  alt?: string
  className?: string
}

const Image = ({ src, alt = '', className = '' }: Props) => {
  return <img src={src} alt={alt} className={`${className} border-0`} />
}

export default Image
