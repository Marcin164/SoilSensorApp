import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Common/Button'
import Input from '../Components/Common/Input'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux';
import { AuthActions } from '../Redux/actions/auth';

type Props = {}

const Login = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [cookies, setCookie] = useCookies<any>(['login']);
  const [message, setMessage] = useState("")
  const [loginCredentials, setLoginCredentials] = useState<any>({
    'email': null,
    'password': null
  })

  const getValue = (e: any) => {
    const loginCredentialsMutable = loginCredentials
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    loginCredentialsMutable[name] = value
    setLoginCredentials(loginCredentialsMutable)
  }

  const submitLogin = async (e: any) => {
    e.preventDefault()
    dispatch(AuthActions.loginStart(loginCredentials.email, loginCredentials.password))
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-background-blue to-background-green flex items-center justify-center">
      <div className="w-screen h-[450px] bg-white shadow-lg">
        <h1 className="w-full h-[90px] flex items-center justify-center"><span className="font-bold text-[32px] text-[#007094]">Welcome</span></h1>
        <h4>{message}</h4>
        <form onSubmit={submitLogin}>
          <Input className="w-4/5 ml-1/10 mt-[15px]" placeholder="Email" name="email" onChange={getValue} />
          <Input className="w-4/5 ml-1/10 mt-[15px]" placeholder="Password" name="password" onChange={getValue} />
          <button className="ml-1/10 mt-[15px] text-[#02C2FF] text-[20px]">Forgot password?</button>
          <Button className="w-[160px] mt-[50px] ml-[auto] mr-[auto]" type="submit" title="Login"/>
        </form>
      </div>
    </div>
  )
}

export default Login
