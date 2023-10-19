import React from 'react'
import './form.css'
import Image from 'next/image'
import rs from '../../../public/image/download copy.png'
import Link from 'next/link'

const Form = () => {
  return (
    <div  className='text-white text-center'>
      <Image 
        src={rs}
        alt='Picture of the RS'
        width={330}
        height={330}
        className='md:w-72 md:h-72 md:hidden opacity-20 absolute top-48 left-8 -z-10 rounded-lg'
        />
      <h3 className='mt-5 text-2xl font-bold'>National Rally Reg Form</h3>
      <h5 className='mt-3 text-md'>Ikeji Arakeji</h5>
      <h5 className='mb-3 text-md'>Babalola Region</h5>
        <form className='text-left w-11/12 md:w-4/12 h-[32rem] overflow-y-scroll m-auto border-2 border-white p-6 rounded-lg mt-6'>
          <label htmlFor='name' className=''>Name</label>
          <input required type='text' placeholder='Enter Your Name' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='email' className=''>Email</label>
          <input required type='email' placeholder='Enter Your Email' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='number' className=''>Phone Number</label>
          <input required type='number' placeholder='Enter Your Name' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='region' className=''>Region</label>
          <input required type='text' placeholder='Enter Your Region' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='division' className=''>Division</label>
          <input required type='text' placeholder='Enter Your Division' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='batallion' className=''>Batallion</label>
          <input required type='text' placeholder='Enter Your Battlion' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='company' className=''>Company</label>
          <input required type='text' placeholder='Enter Your Company No' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='id' className=''>ID Card No</label>
          <input required type='text' placeholder='Enter Your ID Card No' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='age' className=''>Age</label> <br />
          <input required type='date' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-auto h-10 rounded-md'/> <br />
          <Link href='/success'><button type='submit' className='bg-[#1115f5] text-white w-full h-12 mt-5 rounded-md border-2 border-white text-lg font-bold'>Submit</button></Link>
        </form>
    </div>
  )
}

export default Form