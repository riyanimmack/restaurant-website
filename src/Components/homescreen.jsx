import React from 'react'
import Header from './header'
import {Link} from 'react-router-dom'
import { RiArrowDownDoubleFill } from 'react-icons/ri'


const Homescreen = () => {
  return (
    <div className='homescreen w-full h-[100vh]'>
        
        <div className='h-[100vh] w-full flex flex-col items-center justify-center'>
          <h1 className='Logo md:text-[8rem] text-[4rem] '>Italia</h1>
          <p className='md:text-[2.2rem] text-[1.5rem] middle-text md:mt-[-50px] mt-[-20px]'>Your Best Italian Cuisine</p>
          <p className='font md:text-[17px] text-[15px]'>Where Italy comes home to you !</p>
          <Link to="/menu"><button className='mt-4 w-[30vh] py-[8px] px-[10px] bg-[#85833c]  font  font-normal text-xl  hover:bg-[#a5a259] duration-300'>Order Online</button></Link>
        </div>
        <div className='w-full flex flex-col items-center '>
          {/* <p className=' link md:text-[1rem] text-[13px] mt-[-10px]'>MAKE RESERVATION</p> */}
          {/* <Link to='/reservation'><RiArrowDownDoubleFill  className='md:size-10 size-7' /></Link> */}
        </div>
    </div>
  )
}

export default Homescreen