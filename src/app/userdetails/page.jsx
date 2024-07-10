"use client"
import React, { useEffect, useState, } from 'react'
import toast from 'react-hot-toast'
import './page.css'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'


const Userdetails = () => {
    const {data : session , status} = useSession()
    console.log(session, status)
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('/api/userdetails')
            if(!response.ok){
                toast.error(`unable to fetch users details`)
            }
            const responseData = await response.json()
            setData(responseData.userData)
        }
        fetchData()
    },[]) 

    const handleDelete = async (id)=>{
        try {
            const res = await fetch('/api/deleteuser',{
                method : "POST",
                headers : {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({id})
            })
            if(res.ok){
                const data = await res.json()
                toast.success(data.success)
            }else{
                const data = await res.json()
                toast.error(data.error)
            }
        } catch (error) {
            toast.error('error while deleting the user')
        }
    }

    if(session && status === "authenticated"){
        
        return (
          <div className='text-white'>
              <h1 className='text-lg font-bold mt-10 mb-10 text-center'>Registered User details</h1>
      
              <table className="w-auto">
                  <tr className='overflow-x-scroll border-2 border-white'>
                      <th className='px-3 w-auto'>Name</th>
                      <th className='px-3 w-auto'>Email</th>
                      <th className='px-3 w-auto'>Phone</th>
                      <th className='px-3 w-auto'>Region</th>
                      <th className='px-3 w-auto'>Division</th>
                      <th className='px-3 w-auto'>Batallion</th>
                      <th className='px-3 w-auto'>Company</th>
                      <th className='px-3 w-auto'>IdCard</th>
                      <th className='px-3 w-auto'>Age</th>
                      <th className='px-3 w-auto'>Delete</th>
                  </tr>
      
                  {data.map((datum)=>{
                      return(
                          <>
                  <tr className='overflow-x-scrol' key={datum._id}>
                      <td className='py-3 px-3'>{datum.name}</td>
                      <td className='py-3 px-3'>{datum.email}</td>
                      <td className='py-3 px-3'>{datum.number}</td>
                      <td className='py-3 px-3'>{datum.region}</td>
                      <td className='py-3 px-3'>{datum.division}</td>
                      <td className='py-3 px-3'>{datum.batallion}</td>
                      <td className='py-3 px-3'>{datum.company}</td>
                      <td className='py-3 px-3'>{datum.idCard}</td>
                      <td className='py-3 px-3'>{datum.age}</td>
                      {datum.role === 1 ? <>
                      
                      </> : <>
                      <td className='py-3 px-3'><button onClick={()=>handleDelete(datum._id)} className='border-2 bg-red-800 rounded-md px-3'>Delete</button></td></>}
                  </tr>
                          </>
                      )
                  })}
      
              </table>
      
              
      
          </div>
        )
    }else{
        return (
            redirect("/")
        )
    }
    
}

export default Userdetails