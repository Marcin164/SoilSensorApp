import React from 'react'
import TextInput from '@/app/_components/Inputs/TextInput'
import ButtonFilled from '@/app/_components/Buttons/ButtonFilled'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  plant: string
  city: string
  street: string
}

type Props = {
  device?: any
  remove?: (id: string) => void
  save: (data: any) => void
  create: boolean
}

const DeviceForm = ({ device, remove, save, create }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({ defaultValues: device })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    save(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput {...register('name', { required: 'Name is required' })} label="Name" errors={errors} />
      <TextInput {...register('plant', { required: 'Plant is required' })} label="Plant" errors={errors} />
      <TextInput {...register('city', { required: 'City is required' })} label="City" errors={errors} />
      <TextInput {...register('street', { required: 'Street is required' })} label="Street" errors={errors} />
      <div className="flex justify-end">
        {!create && <ButtonFilled onClick={remove} text="Delete" className="bg-[#F83A3A] w-[100px] mr-2" />}
        <ButtonFilled disabled={!isDirty} type="submit" text="Save" className="w-[100px]" />
      </div>
    </form>
  )
}

export default DeviceForm
