import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button'
import Input from '../Components/Input'

type Props = {}

const Login = (props: Props) => {
  let navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-background-blue to-background-green flex items-center justify-center">
        <div className="w-screen h-[450px] bg-white shadow-lg">
            <h1 className="w-full h-[90px] flex items-center justify-center"><span className="font-bold text-[32px] text-[#007094]">Welcome</span></h1>
            <Input className="w-4/5 ml-1/10 mt-[15px]" placeholder="Email"/>
            <Input className="w-4/5 ml-1/10 mt-[15px]" placeholder="Password"/>
            <button className="ml-1/10 mt-[15px] text-[#02C2FF] text-[20px]">Forgot password?</button>
            <Button className="w-[160px] mt-[50px] ml-[auto] mr-[auto]" title="Login" onClick={() => {navigate("/", { replace: true });}}/>
        </div>
    </div>
  )
}

export default Login
