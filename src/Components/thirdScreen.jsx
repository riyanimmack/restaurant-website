import React from 'react'
import pizza from '../assets/pizza-making.jpg'
import { Link } from 'react-router-dom'

function ThirdScreen() {
  return (
    <div className='flex w-full h-screen py-16 px-16 bg-black'>
      <div className='flex flex-col w-[50%]'>
        <div className='flex '>
          <div className='mt-auto mb-auto h-[20px] w-[60px] bg-[#85833c] '></div>
          <h3 className='text-3xl text-[#85833c] mx-3 font-bold font '>Our Promise</h3>
          <div className='mt-auto mb-auto h-[20px] w-[200px] bg-[#85833c]'></div>
        </div>
        <div className=' text-white'>
          <h1 className='text-4xl font pt-10 font-bold'>We Value <span className='text-[#85833c]'>Quality</span> over Quantity</h1>
          <p className='pt-10 font text-xl font-normal'>Italians love their food, they have a deep understanding of it and how it should be prepared & eaten. Inspired by traditional Italian cooking & processes we at Little Italy offer a menu backed by the finest Italian chefs & quality ingredients.</p>
          <p className='pt-7 font text-xl font-normal'>We have our own cheese factory and source our ingredients from suppliers that offer the freshest produce, making it possible for us to serve you, the Italian way.</p>
          <Link to='/about'><button className='mt-4 px-[15px] py-[11px] bg-[#464424] rounded-[8px] font-sans  font-[600] text-[20px]  hover:bg-[#a5a259] duration-300'>Learn More</button></Link>
        </div>
      </div>
      <div className='w-[50%]'>

        <img src={pizza} alt="pasta" className='w-[350px] rounded-[10px] ml-[200px] mt-10' />

      </div>

    </div>
  )
}

export default ThirdScreen