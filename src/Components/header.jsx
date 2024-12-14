import React, { useContext } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Cart } from './context';


const Header = () => {

  const [nav,setNav] = useState(false);
  


  const handleNav =()=>{
    setNav(!nav);
  }

  const {cartItems} = useContext(Cart)

  return (
    <div className='flex justify-between w-full h-20  mx-auto px-4 items-center text-white bg-black fixed bg-opacity-90' >
      <div className='Logo'>
        <h3 className='text-[40px]'>Italia</h3>
      </div>
      <ul className='hidden md:flex ' >
        <NavLink to='/'  className={({ isActive }) => isActive ? 'border-b-4 text-white font-bold link' : 'link'}><li className='p-6 hover:text-white' >HOME</li></NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'border-b-4 text-white font-bold link' : 'link'}><li className='p-6  hover:text-white'>ABOUT</li></NavLink>
        <NavLink to='/carrier' className={({ isActive }) => isActive ? 'border-b-4 text-white font-bold link' : 'link'}><li className='p-6  hover:text-white'>CAREERS</li></NavLink>
        <NavLink to='/reservation' className={({ isActive }) => isActive ? 'border-b-4 text-white font-bold link' : 'link'}><li className='p-6  hover:text-white'>RESERVATION</li></NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'border-b-4 text-white font-bold link' : 'link'}><li className='p-6  hover:text-white'>CONTACT</li></NavLink>
        <NavLink to='/menu' className={({ isActive }) => isActive ? 'border-b-4 text-white font-bold link' : 'link'}><li className='p-6  hover:text-white'>MENU</li></NavLink>
        <NavLink to='/cart' className={({ isActive }) => isActive ? 'border-b-4 text-white font-bold link' : 'link'}><li className='p-6  hover:text-white'>CART ({cartItems.length})</li></NavLink>

      </ul>
      <div className='block md:hidden'>
        {
          nav? (< MdOutlineClose size={20} onClick={handleNav}/>) : (<AiOutlineMenu size={20} onClick={handleNav} />)
        }
        
      </div>
      
          <div className={nav?'top-0 left-0 fixed w-[40%] h-full border-r border-white-600 bg-[#746b55] ease-in-out duration-500':'fixed left-[-100%]'}>
        <div className='Logo'>
          <h3 className='text-[40px] w-full m-4'>Italia</h3>
        </div>
        <ul className='p-4'>
          <Link to='/' className='link'><li className='p-4 border-b border-white-600' >HOME</li></Link>
          <Link to='/menu' className='link'><li className='p-4 border-b border-white-600'>MENU</li></Link>
          <Link to='/about' className='link'><li className='p-4 border-b border-white-600'>ABOUT</li></Link>
          <Link to='/carrier' className='link'><li className='p-4 border-b border-white-600'>CARRERS</li></Link>
          <Link to='/contact' className='link'><li className='p-4 border-b border-white-600'>CONTACT</li></Link>
          <Link to='/cart' className='link'><li className='p-4 border-b border-white-600'>CART</li></Link>

        </ul>
      </div>
      
      
    </div>
  )
}

export default Header