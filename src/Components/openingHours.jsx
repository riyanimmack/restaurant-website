import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosMail } from "react-icons/io"; 

const OpeningHours = () => {
  return (
    <div className='w-full h-[110vh] flex justify-evenly contact text-white '>
        <div className='w-[35%] bg-[#202020] shadow-lg m-20 flex flex-col items-center py-20 '>
        <h1 className=' text-3xl middle-text font-semibold '>Hours of Operation</h1>
        <p className=' font font-normal text-xl px-3 py-1 mt-10'>MON – FRI</p>
        <p className=' font font-normal text-xl px-3 py-1 '>4:00pm – 10:30pm</p>
        <div className='bg-[#85833c] h-[3px] w-[40dvh] my-4'></div>
        <p className=' font font-normal text-xl px-3 py-1 '>SAT</p>
        <p className=' font font-normal text-xl px-3 py-1 '>1:00pm – 10:30pm</p>
        <div className='bg-[#85833c] h-[3px] w-[40dvh] my-4'></div>
        <p className=' font font-normal text-xl px-3 py-1 '>SUN</p>
        <p className=' font font-normal text-xl px-3 py-1 '>11:00am – 11:30pm</p>
        <button className='mt-4 py-[8px] px-[10px] bg-[#85833c]  font  font-normal text-xl  hover:bg-[#a5a259] duration-300'>Make Reservation</button>

        </div>
        <div className='w-[35%] bg-[#202020] m-20 shadow-lg flex flex-col items-center text-center py-20'>
        <p className=' font font-bold text-2xl px-3 py-1 mt-10'>Drop Us a Line</p>
        <p className=' font font-normal text-xl px-3 py-1 mt-10'>Don’t be shy. Let us know if you have any questions!</p>
        <div className='flex mt-5 gap-3'>
                        <IoIosMail size={20} className='mt-1'/>
                        <p className='font text-lg'>italiares@gmail.com</p>

                    </div>
        <Link to='/contact'><button className='mt-4 py-[8px] px-[10px] bg-[#85833c]  font  font-normal text-xl  hover:bg-[#a5a259] duration-300'>Contact</button></Link>
        
        </div>
        
      </div>
  )
}

export default OpeningHours