import React from 'react'
import cake from '../assets/food-1.jpg'
import pizza from '../assets/food2.png'
import pasta from '../assets/food3.jpg'
import Header from './header'
import { SlCalender } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa6";
import { PiLightbulb } from "react-icons/pi";
import { IoIosRestaurant } from "react-icons/io";
import { FiCoffee } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import Footer from './footer'
import OpeningHours from './openingHours'


const About = () => {
  return (

    <>
      
      <div className='w-full h-[70vh] about-background flex flex-col items-center justify-center'><h1 className='text-white text-[4rem] middle-text font-bold mt-16'>About Us</h1>
        <p className='pt-3 font text-gray-200 text-xl font-normal text-center max-w-[90vh]'>Italian food is simple yet sophisticated, using few ingredients to make a dish so flavourful you keep coming back for more. Inspired by Italy’s finest family chefs, we bring you the warmth & love of Italian Cuisine directly to your home.</p>

      </div>
      <div className='flex w-full h-screen py-16 px-16'>
        <div className='flex flex-col w-[50%]'>
          <div className='flex '>
            <div className='mt-auto mb-auto h-[20px] w-[60px] bg-[#85833c] '></div>
            <h3 className='text-3xl text-[#85833c] mx-3 font-bold font '>Our Italia story</h3>
            <div className='mt-auto mb-auto h-[20px] w-[200px] bg-[#85833c]'></div>
          </div>
          <div>
            <h1 className='text-4xl font pt-6 font-bold'>Authentic <span className='text-[#85833c]'>Italian</span> Cuisine at<br /> India’s Favourite Italian<br /> Restaurant</h1>
            <p className='pt-7 font text-xl font-semibold'>Over 3 Decades, Little Italy has pioneered Italian cuisine in India. With 50 outlets in 4 countries, we are India’s largest home grown italian brand bringing you a delicious menu of Pizzas, Pastas, Appetizers, Cheeses, Wines & much more.</p>
            <p className='pt-3 font text-xl font-semibold'>Italian food is simple yet sophisticated, using few ingredients to make a dish so flavourful you keep coming back for more. Inspired by Italy’s finest family chefs, we bring you the warmth & love of Italian Cuisine directly to your home.</p>
            <p className='pt-3 font text-xl font-semibold'>We bring you authentic italian food inspired from secret family recipes of great italian chefs, prepared lovingly, with great taste & superior quality!</p>
          </div>
        </div>
        <div className='w-[50%]'>

          <img src={cake} alt="pasta" className='h-80 rounded-[10px] ml-20 ' />
          <img src={pizza} alt="pasta" className='float-right rounded-[10px] mx-6 mb-30' />



        </div>

      </div>4
      <div className='w-full h-[90vh] bg-black flex flex-col items-center p-20'>
        <h3 className='text-[#BFBFBF] font font-bold text-lg '>IN  THE  SPOTLIGHT</h3>
        <div className='bg-[#85833c] h-[3px] w-[12dvh] my-2'></div>
        <div><h1 className='text-white text-[3rem] middle-text font-semibold my-8'>Awards & Recognition</h1></div>
        <div className=' text-[#706f6f] text-xl font-normal text-center max-w-[100vh]'>Our restaurant has received numerous prestigious awards, celebrated for outstanding Italian cuisine, impeccable service, and dedication to authenticity, ensuring every guest enjoys an unforgettable dining experience.</div>
        <div className='text-white grid grid-cols-4 gap-20 mt-12'>
          <div className='text-center'>
            <h1 className='text-[#85833c] text-[4rem] middle-text font-semibold '>37</h1>
            <h3 className='text-[#BFBFBF] font font-bold text-lg '>PUBLICATIONS</h3>
          </div>
          <div className='text-center'>
            <h1 className='text-[#85833c] text-[4rem] middle-text font-semibold '>21</h1>
            <h3 className='text-[#BFBFBF] font font-bold text-lg '>AWARDS</h3>
          </div>
          <div className='text-center'>
            <h1 className='text-[#85833c] text-[4rem] middle-text font-semibold '>2</h1>
            <h3 className='text-[#BFBFBF] font font-bold text-lg '>MICHELIN STARS</h3>
          </div>
          <div className='text-center'>
            <h1 className='text-[#85833c] text-[4rem] middle-text font-semibold '>8</h1>
            <h3 className='text-[#BFBFBF] font font-bold text-lg '>CHEFS</h3>
          </div>
        </div>

      </div>
      <div className='w-full h-[140vh] bg-white text-black p-10 flex flex-col items-center'>
        <h3 className='text-[#696767] font font-bold text-lg '>FEATURES</h3>
        <div className='bg-[#85833c] h-[3px] w-[12dvh] my-3'></div>
        <div><h1 className='text-black text-[3rem] middle-text font-semibold my-8'>What We Offer</h1></div>
        <div className='grid grid-cols-3 '>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            < SlCalender size={30} color='#85833c' />
            <h3 className='middle-text text-2xl font-semibold py-5'>Amazing Taste</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>Serving tasty food has always been our first priority and also to make sure the taste is constant everytime you consume, you will see no difference in taste</p>
          </div>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            < CiHeart size={30} color='#85833c' />
            <h3 className='middle-text text-2xl font-semibold py-5'>Fresh Ingredients</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>Our restaurant uses only the freshest, locally sourced ingredients for authentic, flavorful Italian dishes daily.</p>
          </div>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            < FaRegThumbsUp size={30} color='#85833c' />
            <h3 className='middle-text text-2xl font-semibold py-5'>Tasty Meals</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>Our restaurant serves tasty meals made with the finest ingredients, ensuring each dish bursts with authentic Italian flavors and quality.</p>
          </div>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            < PiLightbulb size={30} color='#85833c' />
            <h3 className='middle-text text-2xl font-semibold py-5'>Creative Chefs</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>Our creative chefs combine traditional techniques and innovative flavors, crafting unique Italian dishes that delight and surprise every guest.</p>
          </div>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            < IoIosRestaurant size={30} color='#85833c' />
            <h3 className='middle-text text-2xl font-semibold py-5'>Authentic Cuisine</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>We serve authentic Italian cuisine, with time-honored recipes and fresh ingredients, bringing Italy’s rich flavors to your table.</p>
          </div>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            <FiCoffee size={30} color='#85833c' />
            <h3 className='middle-text text-2xl font-semibold py-5'>Home Roasted Coffee</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>Our home-roasted coffee beans are sourced from the finest growers, expertly roasted to bring out rich, bold flavors, offering a smooth, aromatic cup that enhances your dining experience with every sip.</p>
          </div>
        </div>

      </div>
      <div className='w-full h-[120vh] bg-[#dddcdc] text-black p-10 flex flex-col items-center'>
        <h3 className='text-[#696767] font font-bold text-lg '>TESTIMONIALS</h3>
        <div className='bg-[#85833c] h-[3px] w-[12dvh] my-3'></div>
        <div><h1 className='text-black text-[3rem] middle-text font-semibold my-8'>What People are Saying</h1></div>
        <div className='grid grid-cols-4 '>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            <div className='flex gap-2'> <IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /></div>
            <h3 className='middle-text text-2xl font-semibold py-5'>“A Great Find”</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>"Authentic flavors, welcoming atmosphere, and exceptional service—an unforgettable Italian dining experience every time!"</p>
            <p className='font text-[1.2rem] font-normal text-black italic mt-2'>Alex Ford</p>
          </div>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            <div className='flex gap-2'><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /></div>
            <h3 className='middle-text text-2xl font-semibold py-5'>“Fabulous food & flawless service”</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>"Fabulous food and flawless service! Every dish is a delight, and the staff makes the experience exceptional!"</p>
            <p className='font text-[1.2rem] font-normal text-black italic mt-2'>Nathan Leo</p>
          </div>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            <div className='flex gap-2'><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /></div>

            <h3 className='middle-text text-2xl font-semibold py-5'>“Another successful experience”</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>"Another successful experience! Consistently delicious food and a warm atmosphere make every visit memorable."</p>
            <p className='font text-[1.2rem] font-normal text-black italic mt-2'>Margret</p>
          </div>
          <div className='  px-[5rem] py-[2rem] flex flex-col items-center text-center'>
            <div className='flex gap-2'><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /><IoIosStar color='#85833c' size={25} /></div>
            <h3 className='middle-text text-2xl font-semibold py-5'>“Speechless”</h3>
            <p className='font text-[1.2rem] font-normal text-[#696767]'>"Speechless! The flavors, presentation, and service were beyond expectations—an unforgettable dining experience that left me amazed!"</p>
            <p className='font text-[1.2rem] font-normal text-black italic mt-2'>Toausard</p>
          </div>
        </div>
      </div>
      <OpeningHours />
    </>
  )
}

export default About