"use client"
import React, { useEffect, useState, } from 'react'
import toast from 'react-hot-toast'
import './page.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ProtectedRoute from '../../../protectedRoute'


const Userdetails = () => {
    
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

    // const handleAdmin = async (id)=>{
    //     try{
    //         const res = await fetch('/api/makeadmin',{
    //             method : "POST",
    //             headers : {
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify({id})
    //         })

    //         if(res.ok){
    //             const data = await res.json()
    //             toast.success(data.success)
    //         }else{
    //             const data = await res.json()
    //             toast.error(data.error)
    //         }
    //     }catch(error){
    //         toast.error('Admin Process Failed')
    //     }
    // }
    
  return (
    <ProtectedRoute>
    <div className='text-white'>
    {/* <div className='w-full h-screen bg-transparent absolute z-10'>
            <div className='md:w-1/4 bg-[#a6aba7]  m-auto mt-10 border-2 border-white rounded-lg h-auto p-5 text-center'>
                <h3>Deleted User</h3>
                <p>Are you sure u want to delete this user?</p>

                <div className='flex mx-5 mt-20 gap-10 space-between'>
                    <button className='bg-red-800 rounded-md text-white w-full h-12'>Yes</button>
                    <button className='bg-transparent rounded-md border-2 w-full h-12 border-black '>No</button>
                </div>
            </div>
        </div> */}
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
    </ProtectedRoute>
  )
}

export default Userdetails