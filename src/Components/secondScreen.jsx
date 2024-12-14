import React from 'react'
import cake from '../assets/food-1.jpg'
import pizza from '../assets/food2.png'
import pasta from '../assets/food3.jpg'

const SecondScreen = () => {
  return (
    <div className='flex w-full h-screen py-16 px-16 mb-8'>
      <div className='flex flex-col w-[50%]'>
        <div className='flex '>
          <div className='mt-auto mb-auto h-[20px] w-[60px] bg-[#85833c] '></div>
          <h3 className='text-3xl text-[#85833c] mx-3 font-bold font '>About Italia</h3>
          <div className='mt-auto mb-auto h-[20px] w-[200px] bg-[#85833c]'></div>
        </div>
        <div>
          <h1 className='text-4xl font pt-9 font-bold'>Authentic <span className='text-[#85833c]'>Italian</span> Cuisine at<br /> India’s Favourite Italian<br /> Restaurant</h1>
          <p className='pt-9 font text-xl font-normal'>Over 3 Decades, Italia has pioneered Italian cuisine in India. With 50 outlets in 4 countries, we are India’s largest home grown italian brand bringing you a delicious menu of Pizzas, Pastas, Appetizers, Cheeses, Wines & much more.</p>
          <p className='pt-4 font text-xl font-normal'>Italian food is simple yet sophisticated, using few ingredients to make a dish so flavourful you keep coming back for more. Inspired by Italy’s finest family chefs, we bring you the warmth & love of Italian Cuisine directly to your home.</p>
          <p className='pt-3 font text-xl font-normal'>We bring you authentic italian food inspired from secret family recipes of great italian chefs, prepared lovingly, with great taste & superior quality!</p>
        </div>
      </div>
      <div className='w-[50%]'>
        
        <img src={cake} alt="pasta" className='h-80 rounded-[10px] ml-20 '/>
        <img src={pizza} alt="pasta" className='float-right rounded-[10px] '/>


      </div>

    </div>
  )
}

export default SecondScreen