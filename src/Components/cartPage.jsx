import React, { useCallback, useContext, useEffect, useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Cart } from './context';
import { Link } from 'react-router-dom';
import rupay from '../assets/card/bank.png'
import visa from '../assets/card/visa.png'
import master from '../assets/card/card.png'

function CartPage() {

    const { cartItems, setCartItems } = useContext(Cart);
    const card = [rupay, visa, master];


    const countIncrement = (index, type) => {
        var dummyCart = [...cartItems]
        if (type === "increment") {
            if (dummyCart[index].count <= 9) {
                dummyCart[index] = { ...dummyCart[index], count: dummyCart[index].count + 1 }
            }
        }
        else if (type === "decrement") {
            if (dummyCart[index].count > 1) {
                dummyCart[index] = { ...dummyCart[index], count: dummyCart[index].count - 1 }
            }
        }
        setCartItems(dummyCart)
    }

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cartItems.reduce((acc, i) => acc = i.price * i.count + acc, 0))
    }, [cartItems])

    console.log(total)
    return (
        <>
            <div className='w-full h-[50vh] about-background flex flex-col items-center justify-center'>
                <h1 className='text-white text-[4rem] middle-text font-bold mt-16'>My Cart</h1>
            </div>
            <div className='flex w-full gap-16 px-20 py-5'>
                <div className='w-[60%] bg-white p-9'>
                    <h3 className='text-[#302f2f] font font-bold text-lg '>Shopping Cart</h3>
                    <h1 className='font font-semibold text-lg text-[#696767] py-3'>You have {cartItems.length} items in your cart</h1>
                    {
                        cartItems.map((item, index) => (
                            <div key={item.id} className='flex items-center border mt-12 justify-between rounded-lg shadow-md p-5'>
                                <img src={item.image} alt="food image" className='rounded-lg shadow-xl  h-[110px] w-[170px]  ' />
                                <p className='text-black text-[1.2rem] middle-text font-semibold text-left w-40'>{item.name}</p>
                                <div className='flex gap-2 '>
                                    <CiSquareMinus size={25} onClick={() => countIncrement(index, "decrement")} />
                                    <span>{item.count}</span>
                                    <CiSquarePlus size={25} onClick={() => countIncrement(index, "increment")} />
                                </div>
                                <p className='font text-[1.2rem] font-semibold text-[#696767]'>₹ {item.price * item.count}</p>
                                <RiDeleteBin5Line size={22} onClick={() => {
                                    setCartItems(cartItems.filter((c) => c.id !== item.id))
                                }} />
                            </div>
                        ))
                    }

                    <Link to="/menu"><button className='mt-9 ml-64 w-[30vh] py-[8px] px-[10px]  border font font-semibold text-xl  hover:bg-[#b4b4b6] duration-300 '>{cartItems.length !== 0 ? "Add more items" : "Add items"}</button></Link>
                </div>
                {
                    cartItems.length !== 0 ? (
                        <div className='w-[30%] max-h-[110vh] bg-[#4d4db9] mt-24 rounded-lg px-7 py-9 text-white'>
                            <p className=' font font-bold text-xl'>Card Details</p>
                            <p className='font font-normal pt-6'>Card type</p>
                            <div className='flex gap-8 py-5'>
                                {
                                    card.map((i) => (
                                        <img src={i} alt="card" className='w-20 h-16 border border-blue-300 rounded-md' />
                                    ))
                                }
                            </div>
                            <div className='flex flex-col gap-5 mt-5'>
                                <div >
                                    <label for="first_name" class="block mb-2 text-sm font font-normal text-gray-900 dark:text-white">Name on card</label>
                                    <input type="text" id="first_name" class="bg-gray-50 font px-3 text-[#ffffff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#5f5fe2] dark:border-gray-200 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font font-normal text-gray-900 dark:text-white">Card Number</label>
                                    <input type="number" id="first_name" class="bg-gray-50 font px-3 text-[#ffffff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#5f5fe2] dark:border-gray-200 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Card Number" required />
                                </div>
                                <div className='flex gap-3'>
                                    <div >
                                        <label for="first_name" class="block mb-2 font text-sm font-normal text-gray-900 dark:text-white">Expiry date</label>
                                        <input type="date" id="first_name" class="bg-gray-50 font px-3 text-[#ffffff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#5f5fe2] dark:border-gray-200 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mm-yy" required />
                                    </div>
                                    <div>
                                        <label for="first_name" class="block mb-2 text-sm font font-normal text-gray-900 dark:text-white">CVV</label>
                                        <input type="number" id="first_name" class="bg-gray-50 font px-3 text-[#ffffff] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#5f5fe2] dark:border-gray-200 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cvv" required />
                                    </div>
                                </div>
                            </div>
                            <div className='h-[1px] bg-[#5f5fe2] mt-8'></div>
                            <div className='flex justify-between mt-7'>
                                <p className='text-sm font font-normal'>Subtotal </p>
                                <p className='text-sm font font-normal'>₹ {total}</p>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <p className='text-sm font font-normal'>Shipping </p>
                                <p className='text-sm font font-normal'>₹ 0</p>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <p className='text-sm font font-normal'>Total (Tax incl.) </p>
                                <p className='text-sm font font-normal'>₹ {total}</p>
                            </div>
                            <button className='mt-9 ml-16 rounded w-[30vh] py-[8px] px-[10px] font font-semibold text-xl bg-[#62e6f1]  hover:bg-[#9febf1] duration-300 '>Place order</button>
                        </div>
                    ) : <></>
                }

            </div>

        </>
    )
}

export default CartPage