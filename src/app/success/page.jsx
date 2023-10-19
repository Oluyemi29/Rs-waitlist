import React from 'react'
import {MdDone} from 'react-icons/md'
import Link from 'next/link'

const page = () => {
  return (
    <div className='text-center'>
        <h3 className='text-white mt-10 md:mt-24 mb-10 text-xl'>Registration Successful</h3>
        <button className='text-[#403132] bg-white text-[12rem] rounded-full'><MdDone/></button>

        <h4 className='text-white mt-10'>Thank you for registering</h4>
        <p className='text-white'>One fold One Shepherd</p>
        <Link href="/"><button className='mt-5 bg-transparent border-2 border-white px-6 py-2 rounded-md text-white'>Back to Homepage</button></Link>
    </div>
  )
}

export default page