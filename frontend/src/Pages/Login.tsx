import React from 'react'
import Input from '../Components/Inputs/Input'
import { useForm } from 'react-hook-form'
import Href from '../Components/Links/Href'
import ButtonFilled from '../Components/Buttons/ButtonFilled'
import { LoginCredentials } from '../Types/apiTypes'
import Logo from '../Assests/logo.png'
import Image from '../Components/Assets/Image'

type Props = {}

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: LoginCredentials) => {
    console.log(data)
  }

  return (
    <div className="lg:flex">
      <div className="p-2 text-center w-[50vh] lg:text-right lg:mt-[540px] xl: ml-auto">
        <span className="text-[24px] xl:text-[32px] text-[#727272] font-light">The</span>
        <span className="text-[58px] xl:text-[72px] text-[#609966] font-bold">Gardener</span>
      </div>
      <div className="w-screen h-fit sm:max-w-[360px] bg-[#F2F2F2] rounded-md py-4 sm:mx-auto lg:mt-[250px] shadow-xl">
        <Image src={Logo} className="w-[70px] h-[70px] mx-auto" />
        <div className="text-center font-bold text-[#609966] text-[32px]">Welcome</div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))} className="px-4">
          <Input {...register('email')} label="Email" id="email" type="text" errors={errors} />
          <Input
            {...register('password')}
            label="Password"
            id="password"
            type="password"
            errors={errors}
          />
          <Href url="" text="Forgot Password?" />
          <ButtonFilled className="w-full" type="submit" text="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login
