import React, { forwardRef } from 'react'

type Props = {
  type?: string
  label?: string
  className?: string
  onChange?: any
  name?: string
}

const TextInput = forwardRef(({ type = 'text', label, className, onChange, name }: Props, ref: any) => {
  return (
    <div className={`my-2 ${className}`}>
      <label className="ml-2 block text-[#1C1C1C] font-medium">{label}</label>
      <input
        ref={ref}
        name={name}
        onChange={onChange}
        type={type}
        className="rounded-md border-[1px] border-[#E5E5E5] h-[40px] w-full px-2 text-[#4A4A4A]"
      />
    </div>
  )
})

export default TextInput
