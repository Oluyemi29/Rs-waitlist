'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import rs from '../../../public/image/download copy.png'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';

const Forms = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e)=>{
    const {name,value}=e.target 

    setFormData((previousData)=>{
      return{
        ...previousData,

        [name]:value
      }
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {email, password} = formData
    try {
      const res = await signIn('credentials',{
        email,password, redirect : false
      })
      console.log(res);
      if(res.ok && res.status === 200){
        toast.success('Welcome🤝 Admin')
        router.push('/userdetails')
      }else{
        toast.error('You are not an Admin')
        router.push('/form')
      }
    } catch (error) {
      console.log(`an error of ${error} occur`)
    }
  }
  return (
    <div  className='text-white text-center'>
      <Image 
        src={rs}
        alt='Picture of the RS'
        width={330}
        height={330}
        className='md:w-72 md:h-72 md:hidden opacity-20 absolute top-48 left-8 -z-10 rounded-lg'
        />
      <h3 className='mt-5 text-2xl font-bold'>Admin Login Page</h3>
      <h5 className='mt-3 text-md'>Ikeji Arakeji</h5>
      {/* <h5 className='mb-3 text-md'>Babalola Region</h5> */}
        <form onSubmit={handleSubmit} className='text-left w-11/12 md:w-4/12 h-auto m-auto border-2 border-white p-6 rounded-lg mt-16'>
          <label htmlFor='email' className=''>Email</label>
          <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Enter Your Email' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='password' className=''>Password</label>
          <input name='password' value={formData.password} onChange={handleChange} type='password' placeholder='*********' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <button type='submit' className='bg-[#1115f5] text-white w-full h-12 mt-5 rounded-md border-2 border-white text-lg font-bold'>Submit</button>
          <p className='text-red-800 text-[1rem] text-center mt-5 rounded-md font-bold bg-white'>Only Admin is allow to login</p>
        </form>
    </div>
  )
}

export default Forms