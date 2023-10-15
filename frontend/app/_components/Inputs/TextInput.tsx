import React, { forwardRef } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { twMerge } from 'tailwind-merge'
import { ChangeHandler } from 'react-hook-form'

type Props = {
  type?: string
  label?: string
  className?: string
  onChange?: ChangeHandler
  name: string
  errors?: object
}

const TextInput = forwardRef(({ type = 'text', label, className, onChange, name, errors }: Props, ref: any) => {
  return (
    <div className={twMerge('my-2', className)}>
      <label className="ml-2 block text-almostBlack font-medium">{label}</label>
      <input
        ref={ref}
        name={name}
        onChange={onChange}
        type={type}
        className="rounded-md border-[1px] border-lightGray h-[40px] w-full px-2 text-darkGray"
      />
      <div className="text-danger text-[14px]">{errors && <ErrorMessage errors={errors} name={name} />}</div>
    </div>
  )
})

export default TextInput
