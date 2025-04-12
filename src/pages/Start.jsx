import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/beautiful-view-construction-site-city-sunset_181624-9347.jpg?t=st=1744453545~exp=1744457145~hmac=e45b0ec3fb148da2956c5dc04d85053dd32afef538f6225940b22adb44b35a33&w=1380)] h-screen pt-8 flex justify-between flex-col w-full'>
        <div className='w-16 ml-9'></div>
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-semibold'>Let's do Some Civil Calculation</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
