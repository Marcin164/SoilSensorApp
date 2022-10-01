import React from 'react'

type Props = {
    type?: string
    className?: string
    placeholder?: string
    name?: string
    onChange?: (e:any) => any
}

const Input = (props: Props) => {
  return (
    <input className={`${props.className} h-[60px] bg-[#D9D9D9] rounded placeholder-[#7D7D7D] text-[24px] pl-4`} type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange}/>
  )
}

export default Input