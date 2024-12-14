import React, { useContext, useState } from 'react'
import { TbShoppingBagCheck } from "react-icons/tb";
import { MenuList } from './menuList';
import { Cart } from './context';
import { TbShoppingBagX } from "react-icons/tb";

const Menu = () => {

  const [filteredData, setFilterData] = useState(MenuList);
  const [highlight , setHighlight] =useState("");

  const {cartItems , setCartItems} =useContext(Cart);
  


  const handleFilter = (data,e) => {
    
    if (data !== "all") {
      const tempFilter = MenuList.filter((item) => {
        return (item.type === data);
      })
      setFilterData(tempFilter);
    }

    else{
      setFilterData(MenuList);
    }
    setHighlight(data);
  }

  

  return (
    <>


      <div className='w-full h-[50vh] about-background flex flex-col items-center justify-center'><h1 className='text-white text-[4rem] middle-text font-bold mt-16'>Discover Our menu</h1>
        <p className='pt-3 font text-gray-200 text-xl font-normal text-center max-w-[90vh]'>Quaerat debitis, vel, sapiente dicta sequi labore porro pariatur harum expedita.</p>
      </div>
      <div className='w-full py-14 px-20 bg-[white] flex flex-col items-center'>
        <h3 className='text-[#696767] font font-bold text-lg '>MENU</h3>
        <div className='bg-[#85833c] h-[3px] w-[12dvh] my-3'></div>
        <div >
          <ul className='w-full h-[20vh] flex gap-[100px] justify-center mt-8 '>
          <li className={` font font-semibold text-lg cursor-pointer h-8 ${highlight==='all' ? 'text-red-600':'text-[#696767]'}`} onClick={(e) => handleFilter("all",e)}>All items</li>
          <li className={` font font-semibold text-lg cursor-pointer h-8 ${highlight==='main' ? 'text-red-600':'text-[#696767]'}`} onClick={(e) => handleFilter("main",e)}>Main Course</li>
          <li className={` font font-semibold text-lg cursor-pointer h-8 ${highlight==='salad' ? 'text-red-600':'text-[#696767]'}`} onClick={(e) => handleFilter("salad",e)}>Salads</li>
          <li className={` font font-semibold text-lg cursor-pointer h-8 ${highlight==='drink' ? 'text-red-600':'text-[#696767]'}`} onClick={(e) => handleFilter("drink",e)}>Drinks</li>
          </ul>
        </div>
        <div className='h-[0px] w-[170dvh] mt-[-60px] border-b-[6px] border-dotted border-[#696767] opacity-[0.3]'></div>
        <div className=' grid grid-cols-2 gap-0 mt-10 ml-16'>
          {
            filteredData.map((item) => {
              return (
                <div className='flex gap-14 p-10'>
                  <div>
                    <img src={item.image} alt="" className='rounded-lg shadow-xl  h-[110px] w-[420px]  ' />
                  </div>
                  <div className='grid grid-cols-2 gap-x-14 gap-y-2 transition duration-100'>
                    <h1 className='text-black text-[1.2rem] middle-text font-semibold text-left'>{item.name}</h1>
                    <p className='font text-[1.2rem] font-semibold text-[#696767]'>{item.price}</p>
                    <p className='font text-[1rem] font-normal text-[#696767]'>{item.description}</p>
                    {
                      cartItems.includes(item)?
                      <div className='rounded-full bg-green-600 p-1.5 h-[44px] w-[44px]'>
                      <TbShoppingBagX size={28} color='black'
                      onClick={()=>{
                        setCartItems(cartItems.filter((c)=>c.id!==item.id))
                      }}
                      />
                      </div>:
                      <div className='rounded-full bg-orange-300 p-1.5 h-[44px] w-[44px]'> 
                      <TbShoppingBagCheck size={28} 
                      
                      onClick={()=>{
                        setCartItems([...cartItems , item])
                      }}
                      />
                      </div>
                    }
                    
                    
                  </div>
                    
                </div>
              )
            })
          }

        </div>
      </div>

    </>
  )
}

export default Menu