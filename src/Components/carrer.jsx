import React from 'react'
import Header from './header'
import chef from '../assets/threeChef.jpg'
import oneChef from '../assets/chef.jpg'
import Footer from './footer'

const Carrier = () => {
  return (
    <>
    
      <div className='w-full h-[50vh] about-background flex flex-col items-center justify-center'><h1 className='text-white text-[4rem] middle-text font-bold mt-14'>Careers</h1>
      </div>
      <div className='w-full h-[90vh] p-[100px] bg-[#dddcdc] '>
      <h3 className='text-[#696767] font font-bold text-lg '>CAREER</h3>
        <div className='bg-[#85833c] h-[3px] w-[12dvh] my-3'></div>
        <div><h1 className='text-black text-[3rem] middle-text font-semibold my-8 text-left'>Build your Career here</h1></div>
        <div className='grid grid-cols-2 gap-[180px]'>
          <div className=' '>
            <p className='font text-[1.2rem] font-normal text-[#696767] '>We always welcome new members to the Italia Family. We always have new opportunities available , so we update update our job board regularly . Feel free to check out our contact page for how to connect.</p>
          </div>
          <div className='mt-[-100px] '>
              <img src={chef} alt="chef" className='shadow-md rounded-[5px] '/>
          </div>
        </div>
      </div>
      <div className='w-full h-[110vh] p-[80px] bg-white '>
      
        <div><h1 className='text-black text-[3rem] middle-text font-semibold my-8 text-left'>Opportunities</h1></div>
        <div className='grid grid-cols-2 gap-[200px]'>
          <div className='flex flex-col gap-10'>
          <div >
          <h1 className='text-black text-[2rem] middle-text font-normal pb-2 text-left'>Restaurant Manager</h1>
            <p className='font text-[1.2rem] font-normal text-[#696767]  pb-2  '>3 years experience required</p>
            <a href="www.linkedin.com" className='font text-blue-500 underline'>More info</a>
          </div>
          <div >
          <h1 className='text-black text-[2rem] middle-text font-normal pb-2 text-left'>Junior Chef</h1>
            <p className='font text-[1.2rem] font-normal text-[#696767]  pb-2  '>1 years experience required</p>
            <a href="www.linkedin.com/" className='font text-blue-500 underline'>More info</a>
          </div>
          <div>
          <h1 className='text-black text-[2rem] middle-text font-normal pb-2 text-left'>Marketing Intern</h1>
            <p className='font text-[1.2rem] font-normal text-[#696767]  pb-2  '>No years experience required</p>
            <a href="www.linkedin.com/" className='font text-blue-500 underline'>More info</a>
          </div>
          </div>
          
          <div className='mt-[-90px] '>
              <img src={oneChef} alt="chef" className='h-[500px] shadow-md rounded-[5px] '/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carrier