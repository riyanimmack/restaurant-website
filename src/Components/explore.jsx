import React from 'react'
import { GiFullPizza } from "react-icons/gi";
import { Link } from 'react-router-dom'
import { PiQuotesFill } from "react-icons/pi";
import bg from '../assets/bg.jpg'

const Explore = () => {



    return (
        <>
            <div className='w-full h-[120vh] kitchen p-10 text-white'>
                <div className='flex flex-col text-center mt-3'>
                    <h3 className='text-[#85833c] font font-semibold text-xl'>EXPLORE</h3>
                    <h1 className='font font-bold text-3xl p-8'>MENU FEATURES</h1>
                </div>
                <div className='flex gap-10'>
                    <div className='bg-[#10130d] w-[31%] px-[5rem] py-[3rem] hover:scale-105 duration-300'>
                        <GiFullPizza size={60} />
                        <h3 className='font text-2xl font-semibold py-5'>Always Fresh</h3>
                        <p className='font text-[1.2rem] font-normal text-[#DBE7C9]'>We focus on serving fresh food always. Fresh food is always best for your precious body and we keep that in mind and that's why we like to serve everything fresh</p>
                    </div>
                    <div className='bg-[#10130d]  w-[31%] px-[5rem] py-[2rem] hover:scale-105 duration-300'>
                        <GiFullPizza size={60} />
                        <h3 className='font text-2xl font-semibold py-5'>Amazing Taste</h3>
                        <p className='font text-[1.2rem] font-normal text-[#DBE7C9]'>Serving tasty food has always been our first priority and also to make sure the taste is constant everytime you consume, you will see no difference in taste</p>
                    </div>
                    <div className='bg-[#10130d]  w-[31%] px-[5rem] py-[2rem] hover:scale-105 duration-300'>
                        <GiFullPizza size={60} />
                        <h3 className='font text-2xl font-semibold py-5'>Premium Ingredients</h3>
                        <p className='font text-[1.2rem] font-normal text-[#DBE7C9]'>We know great ingredients are must to take the taste and health on next level so that's why we focus on using oragnic ingredients so you don't have to worry</p>
                    </div>

                </div>
                <div className='pt-10 flex justify-center'>

                    <Link to='/menu'><button className=' mt-4 px-[15px] py-[11px] bg-[#464424] rounded-[8px] font-sans  font-[600] text-[20px] hover:bg-[#a5a259] duration-300'>See Menu</button></Link>

                </div>
            </div>
            <div className='w-full h-[130vh] bg-[#161511] p-10 text-white'>
                <div className='flex flex-col text-center mt-3'>
                    <h3 className='text-[#85833c] font font-semibold text-xl'>OUR</h3>
                    <h1 className='font font-bold text-3xl p-9'>CUSTOMER REVIEWS</h1>
                </div>
                <div className='flex gap-10 '>
                    <div className='back w-[31%] px-[5rem] py-[3rem] flex flex-col rounded-[10px] items-center hover:scale-105 duration-300'>
                        <PiQuotesFill size={60} />
                        
                        <p className='font text-[1.2rem] font-normal text-[#DBE7C9] italic pt-8'>The food was absolutely wonderful, from preparation to presentation, very pleasing. We especially enjoyed the special bar drinks, the cucumber/cilantro infused vodka martini and the K&P was great.</p>
                        <h3 className='font text-2xl font-semibold py-5'>Ben White</h3>
                    </div>
                    <div className='back w-[31%] px-[5rem] py-[3rem] flex flex-col rounded-[10px] items-center hover:scale-105 duration-300'>
                        <PiQuotesFill size={60} />
                        <p className='font text-[1.2rem] font-normal text-[#DBE7C9] italic pt-8'>Excellent eating experience.. from walking in the door and being greeted by employee, seated and drink order taken, was maybe 5 minutes. Meal was served hot and excellent taste. Server was very friendly.</p>
                        <h3 className='font text-2xl font-semibold py-5'>Mark Taylor</h3>
                    </div>
                    <div className='back w-[31%] px-[5rem] py-[3rem] flex flex-col rounded-[10px] items-center hover:scale-105 duration-300'>
                        <PiQuotesFill size={60} />
                        <p className='font text-[1.2rem] font-normal text-[#DBE7C9] italic pt-8'>A very friendly welcoming place to spend time. All personnel were very well trained,helpful and all done with a smile. Everything was handled with efficiency and attention to every detail was given.</p>
                        <h3 className='font text-2xl font-semibold py-5'>Allan</h3>
                    </div>

                </div>
                <div className='pt-10 flex justify-center'>

                    <Link to='/about'><button className=' mt-4 px-[15px] py-[11px] bg-[#464424] rounded-[8px] font-sans  font-[600] text-[20px] hover:bg-[#a5a259] duration-300'>See More</button></Link>

                </div>
            </div>

        </>
    )
}

export default Explore