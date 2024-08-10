import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import plane from '../../public/plane.json'
import earth from '../../public/map.json'

const Home = () => {
  return (
    <div>
      <div className=" flex justify-center items-center min-h-screen bg-[url('/public/bg.png')] bg-cover bg-center">
        <div className="w-[1114px] h-[530px] backdrop-blur-md bg-white/20 flex justify-center items-center p-5 rounded-lg relative">
        <img className=' w-20 h-20 absolute top-7 left-7' src="/public/logo.png" alt="Company logo" />
          <div className="flex flex-col justify-between items-center mr-6">
            <h1 className=' font-bold text-[38px] text-[#000] text-center'>Travel with us</h1>
            <p className='font-medium text-[20px] text-[#8a8a8a] mt-1 text-center'>Explore the world to experience the beauty of nature</p>
            <Link to='/login' className='mt-14 w-[383px] h-[72px] hover:bg-[#7d7d7d] hover:text-[#000] hover:mt-6 hover:border-[3px] hover:border-black font-semibold duration-200 bg-black text-white flex justify-center items-center rounded-full text-2xl'>Login</Link>
          </div>
          <Lottie className='w-[500px] h-[600px]' animationData={earth} />
        </div>
      </div>
    </div>
  )
}

export default Home

