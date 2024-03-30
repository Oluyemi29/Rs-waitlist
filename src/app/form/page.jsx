'use client'
import React, { useState } from 'react'
import './form.css'
import Image from 'next/image'
import rs from '../../../public/image/download copy.png'
import toast from 'react-hot-toast'

const Forms = () => {
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    number : "",
    region : "",
    division : "",
    batallion : "",
    company : "",
    idCard : "",
    age : ""

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

    const {name, email, number, region, division, batallion, company, idCard, age} = formData

    try {
      const res = await fetch('/api/register',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({name, email, number, region, division, batallion, company, idCard, age})
      })
      
      if (res.ok) {
        const successData = await res.json();
        toast.success(successData.success)
        console.log(successData.success);
      }else{
        const errorData = await res.json();
        toast.error(errorData.error)
        console.log(errorData.error);
        
      }
      
    } catch (error) {
      console.log(error)
      toast.error(`an unexpected ${error} error occur`)
    }
  }
  return (
    <div  className='text-white text-center all'>
      <Image 
        src={rs}
        alt='Picture of the RS'
        width={330}
        height={330}
        className='md:w-72 md:h-72 md:hidden opacity-20 absolute top-48 left-8 -z-10 rounded-lg'
        />
      <h3 className='mt-5 text-2xl font-bold'>Events Registration Form</h3>
      <h5 className='mt-3 text-md'>Ikeji Arakeji</h5>
      {/* <h5 className='mb-3 text-md'>Babalola Region</h5> */}
        <form onSubmit={handleSubmit} className='text-left w-11/12 md:w-4/12 h-[32rem] overflow-y-scroll m-auto border-2 border-white p-6 rounded-lg mt-6'>
          <label htmlFor='name' className=''>Name</label>
          <input name='name' value={formData.name} onChange={handleChange} type='text' placeholder='Enter Your Name' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='email' className=''>Email</label>
          <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Enter Your Email' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='number' className=''>Phone Number</label>
          <input name='number' value={formData.number} onChange={handleChange} type='number' placeholder='Enter Your Number' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='region' className=''>Region</label>
          <input name='region' value={formData.region} onChange={handleChange} type='text' placeholder='Enter Your Region' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='division' className=''>Division / Command</label>
          <input name='division' value={formData.division} onChange={handleChange} type='text' placeholder='Enter Your Division' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='batallion' className=''>Batallion</label>
          <input name='batallion' value={formData.batallion} onChange={handleChange} type='text' placeholder='Enter Your Battlion' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='company' className=''>Company</label>
          <input name='company' value={formData.company} onChange={handleChange} type='text' placeholder='Enter Your Company No' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='id' className=''>ID Card No</label>
          <input name='idCard' value={formData.idCard} onChange={handleChange} type='number' placeholder='Enter Your ID Card No' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-full h-10 rounded-md' />
          <label htmlFor='age' className=''>Age</label> <br />
          <input name='age' value={formData.age} onChange={handleChange} type='date' className='border-2 text-[#403132] mt-2 mb-2 px-4 border-[#1115f5] w-auto h-10 rounded-md'/> <br />
          <button type='submit' className='bg-[#1115f5] text-white w-full h-12 mt-5 rounded-md border-2 border-white text-lg font-bold'>Submit</button>
        </form>
    </div>
  )
}

export default Forms