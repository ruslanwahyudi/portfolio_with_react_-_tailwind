import React from 'react'
import { BsHouse, BsShopWindow, BsBag, BsPersonCircle, BsSend, BsStack, BsList } from "react-icons/bs";

const Tabmenu = () => {
  return (
    <>
        <nav className='flex justify-center'>
            <div className='border fixed bottom-5 flex bg-white opacity-90 flex-wrap gap-2 px-4 py-3 justify-center items-center shadow-xl border-borderColor rounded-xl w-fit h-fit'>
                <a href="#shop" className='border border-borderColor rounded-lg w-10 h-10 active'>
                    <div className=''>
                        <BsHouse className='w-full h-full p-2'/>
                    </div>
                </a>
                <a href="#shop" className='border border-borderColor rounded-lg w-10 h-10'>
                    <div className=''>
                        <BsShopWindow className='w-full h-full p-2'/>
                    </div>
                </a>
                <a href="#shop" className='border border-borderColor rounded-lg w-10 h-10 '>
                    <div className=''>
                        <BsBag className='w-full h-full p-2'/>
                    </div>
                </a>
                <a href="#shop" className='border border-borderColor rounded-lg w-10 h-10'>
                    <div className=''>
                        <BsPersonCircle className='w-full h-full p-2'/>
                    </div>
                </a>
                <a href="#shop" className='border border-borderColor rounded-lg w-10 h-10'>
                    <div className=''>
                        <BsSend className='w-full h-full p-2'/>
                    </div>
                </a>
                <a href="#shop" className='border border-borderColor rounded-lg w-10 h-10'>
                    <div className=''>
                        <BsStack className='w-full h-full p-2'/>
                    </div>
                </a>
                <a href="#shop" className='border border-borderColor rounded-lg w-10 h-10 hidden md:block'>
                    <div className=''>
                        <BsList className='w-full h-full p-2'/>
                    </div>
                </a>
            </div>
        </nav>
    </>
  )
}

export default Tabmenu