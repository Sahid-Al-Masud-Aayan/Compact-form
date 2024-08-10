import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";


const Login = () => {
  // variables
  const [before, change]= useState(false)
  const [email, setEmail]=useState('')
  const [emailError, setEmailError]=useState('')
  const [password, setPassword]=useState('')
  const [passwordError, setPasswordError]=useState('')

  //functions
  const emailManager = (e)=>{
    setEmail(e.target.value)
    setEmailError('')
  }
  const passwordManager = (e)=>{
    setPassword(e.target.value)
    setPasswordError('')
  }
  const show = ()=>{
    change(!before)
  }

  //submit function
  const finalSubmit = (e)=>{
    e.preventDefault()
    if(!email){
      setEmailError('Enter your email!')
    }if(!password){
      setPasswordError('Enter your password!')
    }else{
      console.log('Login done')
    }
  }


  return (
    <>
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center min-h-screen">
      <div className=" h-[550px] w-[370px] bg-white rounded-2xl p-6 ">
        <div className="flex flex-col justify-center items-center">
        <img className='h-12 w-12 rounded-full' src="/public/logo.png" alt="logo" />
        <h1 className=' text-3xl mt-2 font-extrabold'>Login</h1>
        </div>
        <div className="flex flex-col mt-12">
          <form onSubmit={finalSubmit}>
          <p className='font-medium'>Email</p>
          <input onChange={emailManager} className='w-full h-[45px] border-b-2 bg-transparent border-b-black outline-none' type="email" />
          <p className='text-xs font-semibold text-[#ff0000]'>{emailError}</p>
          <p className='font-medium mt-[35px]'>Password</p>
          <div className="relative w-full">
            {
              before ?
              <ImEyeBlocked onClick={show} className='text-xl absolute top-[30%] left-[90%] cursor-pointer'/>
              :
              <ImEye onClick={show} className='text-xl absolute top-[30%] left-[90%] cursor-pointer'/>
            }
          <input onChange={passwordManager} className='w-full h-[45px] border-b-2 bg-transparent border-b-black outline-none' type={before? "text":"password"} />
          <p className='text-xs font-semibold text-[#ff0000]'>{passwordError}</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <button type='submit' className='w-full h-[50px] rounded-2xl bg-blue-600 hover:bg-blue-800 mt-[45px] duration-200 text-[#fff] font-medium text-xl'>Login</button>
          <p className='font-semibold text-[#a0a0a0] text-[16px] mt-14'>Don't have an account? <span className='text-[#7300ff] hover:text-[#e02fff] duration-150 font-extrabold'><Link to='/signup'>Create Account</Link></span></p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
