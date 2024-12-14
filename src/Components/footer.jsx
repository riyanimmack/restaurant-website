import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";

const Footer = () => {

    const [text,setText]=useState('');

    return (
        <div className='bg-[#161511] w-full text-white'>
            <div className=' w-full max-w-7xl h-[50vh] p-5 pb-8 mx-auto footer'>
                <div>
                    <h1 className='Logo text-5xl mt-8'>Italia</h1>
                    
                    <div className='flex gap-3 mt-3'>
                        <a href="https://www.instagram.com/"><FaInstagram color='white' size={20} /></a>
                        <a href="https://www.facebook.com/"><FaFacebook color='white' size={20} /></a>
                        <a href="https://www.x.com/"><FaXTwitter color='white' size={20} /></a>
                        <a href="https://www.youtube.com/"><FaYoutube color='white' size={20} /></a>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='mt-8 text-[#85833c] font font-semibold text-xl'>Support</h3>
                        <Link to='/contact'><p className='font text-lg'>Contact us </p></Link>
                        <Link to='/reservation'><p className='font text-lg'>Reservation</p></Link>
                        <Link><p>FAQ</p></Link>

                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='mt-8 text-[#85833c] font font-semibold text-xl'>Italia</h3>
                    <Link to='/about'><p className='font text-lg'>About </p></Link>
                    <Link to='/menu'><p className='font text-lg'>Menu</p></Link>
                    <Link to='/carrier'><p className='font text-lg'>Careers</p></Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex mt-9 gap-3'>
                        <IoIosMail size={20} className='mt-1'/>
                        <p className='font text-lg'>Get latest updates from Italia</p>

                    </div>
                    <div className='flex flex-col gap-4'>
                        <input type="email" value={text} onChange={(e)=>setText(e.target.value)} class="block py-2.5  pe-0 w-full  text-white font text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#85833c] focus:outline-none focus:ring-0 focus:border-[#85833c] peer placeholder:text-lg font" placeholder="Enter your e-mail address" />
                        <button className='mt-4 w-[100px] py-[8px] bg-[#85833c] rounded-[4px] font  font-normal text-xl  hover:bg-[#a5a259] duration-300'>Sign up</button>
                    </div>

                </div>
            </div>
            <p className='text-center pb-9 font text-md text-[#696767]'>© 2025 Italia <br />Developed by Riyan Immack</p>
        </div>
    )
}

export default Footer