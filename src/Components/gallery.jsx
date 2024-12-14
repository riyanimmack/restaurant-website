import React from 'react'
import img1 from '../assets/i1.jpg'
import img2 from '../assets/i2.jpg'
import img3 from '../assets/i3.jpg'
import img4 from '../assets/i4.jpg'
import img5 from '../assets/i5.jpg'
import bg from '../assets/i6.jpg'



const Gallery = () => {
  return (
    <div className='w-full h-[120vh] bg-black flex flex-col items-center'>
         <h2 className='font font-semibold text-xl text-white pt-9'>OUR</h2>
         <h1 className='font font-bold text-3xl  text-[#85833c] p-4'>GALLERY</h1>
         <div className='w-full  max-w-5xl p-5 pb-10 mx-auto mb-10 gallery'>
            <img src={img1} alt="image" className='hover:scale-105 duration-300'/>
            <img src={img2} alt="image" className='hover:scale-105 duration-300'/>
            <img src={img3} alt="image" className='hover:scale-105 duration-300'/>
            <img src={bg} alt="image" className='hover:scale-105 duration-300'/>
            <img src={img5} alt="image" className='hover:scale-105 duration-300'/>
            <img src={img4} alt="image" className='hover:scale-105 duration-300'/>
           
            
            
         </div>
    </div>
  )
}

export default Gallery