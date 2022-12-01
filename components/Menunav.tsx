import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import { IoFishSharp } from "react-icons/io5";
import Link from 'next/link'
import { title } from 'process';

const Menunav = () => {
  return (
    <div className='flex justify-center  overflow-hidden'>
        <div className="fixed bg-red-500 w-[49%] overflow-hidden">
        <ul className="flex  justify-center gap-5 overflow-hidden">
                        <a ><li className=" text-white text-base uppercase  hover:text-black">Ramen</li></a>
                        <a ><li className=" text-white text-base uppercase hover:text-black">Sashimi</li></a>
                        <a ><li className=" text-white text-base uppercase hover:text-black">Rolls</li></a>
                        <a ><li className=" text-white text-base uppercase hover:text-black">Drinks</li></a>
        </ul>
        </div>
        <div className="flex flex-col pt-6">
        <IoFishSharp  />
        <h2 className="uppercase text-sm text-white flex justify-center">sun fish</h2>
        </div>
    </div>
  )
}

export default Menunav