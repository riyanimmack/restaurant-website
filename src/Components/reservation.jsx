import React from 'react'
import Header from './header'
import Footer from './footer'
import image from '../assets/fruit.jpg'
import { Link } from 'react-router-dom'
import OpeningHours from './openingHours'

const Reservation = () => {
  return (
    <>
    
    <div className='w-full h-[50vh] about-background flex flex-col items-center justify-center'><h1 className='text-white text-[4rem] middle-text font-bold mt-14'>Reservation</h1>
    </div>
    <div className='w-full h-[120vh] p-20 bg-[#dddcdc]'>
      <h3 className='text-[#696767] font font-bold text-lg '>RESERVATION</h3>
        <div className='bg-[#85833c] h-[3px] w-[12dvh] my-3'></div>
        <div><h1 className='text-black text-[3rem] middle-text font-semibold my-8 text-left'>Make Reservations</h1></div>
        <div className='flex gap-20'>
          <div className=' w-[60%] '>
          <div className='grid grid-cols-2 gap-5'>
            <input type='text' placeholder='Name' className='"block py-3  px-4 w-full  text-black font text-lg bg-transparent border-2  border-[#696767] appearance-none dark:text-black dark:border-gray-900 dark:focus:border-[#85833c] focus:outline-none focus:ring-0 focus:border-[#85833c] peer placeholder:text-black text-lg font'/>
            <input type='number' placeholder='No of Seats' className='"block py-3  px-4 w-full  text-black font text-lg bg-transparent border-2  border-[#696767] appearance-none dark:text-black dark:border-gray-900 dark:focus:border-[#85833c] focus:outline-none focus:ring-0 focus:border-[#85833c] peer placeholder:text-black text-lg font ' />
            <input type='date' placeholder='Date of arraival' className='"block py-3  px-4 w-full  text-black font text-lg bg-transparent border-2  border-[#696767] appearance-none dark:text-black dark:border-gray-900 dark:focus:border-[#85833c] focus:outline-none focus:ring-0 focus:border-[#85833c] peer placeholder:text-black text-lg font' />
            <input type='time' placeholder='Time' className='"block py-3  px-4 w-full  text-black font text-lg bg-transparent border-2  border-[#696767] appearance-none dark:text-black dark:border-gray-900 dark:focus:border-[#85833c] focus:outline-none focus:ring-0 focus:border-[#85833c] peer placeholder: text-black text-lg font' />
          </div>
          <div className='mt-5'>
          <textarea type='' placeholder='Message' className='h-40 block py-3  px-4 w-full  text-black font text-lg bg-transparent border-2  border-[#696767] appearance-none dark:text-black dark:border-gray-900 dark:focus:border-[#85833c] focus:outline-none focus:ring-0 focus:border-[#85833c] peer placeholder:text-black text-lg font' />
          <div className='ml-[604px] mt-8'>
          <button className='mt-4 py-[8px] px-[10px] bg-[#85833c]  font  font-normal text-xl  hover:bg-[#a5a259] duration-300 text-white'>Make Reservation</button>

          </div>
          </div>
          </div>
          <div className='mt-[-100px] w-[25%] flex flex-col bg-white p-10 h-[90vh] shadow-md text-center'>
              <img src={image} alt="pizza" className='h-[60vh]' />
              <h3 className='text-black font font-bold text-lg px-3 py-1 mt-2'>CONTACT</h3>
              <h1 className='text-black text-lg middle-text font-semibold  px-3'>278, Mount Road</h1>
              <h3 className='text-black font font-normal text-lg px-3  mt-2'>Chennai-60028</h3>
              <h3 className='text-black font font-normal text-lg px-3  mt-2'>Tel -778 234 9876</h3>
          </div>
        </div>
      </div>
      <OpeningHours />
      <Footer />
    
    </>
  )
}

export default Reservation