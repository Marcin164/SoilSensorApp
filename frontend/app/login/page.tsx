'use client'

import Image from 'next/image'
import AppHeader from '../_components/Headers/AppHeader'
import Header from '../_components/Headers/Header'
import TextInput from '../_components/Inputs/TextInput'
import ButtonFilled from '../_components/Buttons/ButtonFilled'
import ButtonBordered from '../_components/Buttons/ButtonBordered'
import { useForm, SubmitHandler } from 'react-hook-form'
import { authenticate } from '../_services/authService'
import { useRouter } from 'next/navigation'

type Inputs = {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response: any = await authenticate(data.email, data.password)
    if (response.status === 200) {
      router.push('/dashboard/home')
    }
  }

  return (
    <div className="flex justify-center md:justify-between">
      <div className="hidden md:block md:w-1/2" />
      <div className="px-4 md:w-1/2 md:px-2">
        <Image src="" alt="" />
        <AppHeader />
        <Header text="Welcome, please sign in" className="mt-[48px] md:mt-[70px]" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput {...register('email', { required: true })} label="Email" className="w-full sm:w-[370px]" />
          <TextInput {...register('password', { required: true })} label="Password" type="password" className="w-full sm:w-[370px]" />
          <ButtonBordered text="Forgot password?" className="w-[200px] my-4" />
          <ButtonFilled type="submit" text="Let's start" className="w-full my-4 sm:w-[370px]" />
        </form>
      </div>
    </div>
  )
}
