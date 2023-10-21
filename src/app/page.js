import Image from 'next/image'
import cac from '../../public/image/cac_logo copy.png'
import rs from '../../public/image/download copy.png'
import './page.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='text-center h-screen place-content-center flex flex-col'>
      <Image 
        src={rs}
        alt='Picture of the RS'
        width={350}
        height={330}
        className='md:w-72 md:h-72 md:hidden opacity-5 absolute top-48 left-8 -z-10 rounded-lg'
        />
      <div className='flex md:space-x-12 space-x-6 justify-center photos'>
        <Image 
        src={rs}
        alt='Picture of the RS'
        width={100}
        height={100}
        className='md:w-72 md:h-72 rounded-lg'
        />

          <Image 
          src={cac}
          alt='Picture of the CAC'
          width={110}
          height={100}
          className='md:w-80 hidden md:flex md:h-72 rounded-lg'
          />
        
      </div>
      <div className='mt-5'>
        <h3 className='font-bold md:text-3xl text-white'>THE ROYAL SHEPHERD</h3>
        <h4 className='font-bold md:text-3xl text-white'>CHRIST APOSTOLIC CHURCH</h4>
        <h5 className='font-bold md:text-2xl text-white'>NATIONAL & OVERSEA</h5>
        <Link href="/form"><button className='mt-7 mb-7 bg-[#1115f5] border-2 border-white text-white px-6 py-2 md:text-lg rounded-md font-bold'>Go to Registration page</button></Link>
      </div>
      <div className='flex md:hidden md:space-x-12 space-x-6 justify-center photos'>
        
        <Image 
          src={cac}
          alt='Picture of the CAC'
          width={110}
          height={100}
          className='md:w-64 md:h-60 rounded-lg'
          />
        </div>
    </div>
  )
}
