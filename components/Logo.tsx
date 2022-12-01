import Link from 'next/link';
import React from 'react'
import { IoFishSharp } from "react-icons/io5";


const Logo = () => {
  return (
    <div>
        <Link href='/'>
            <div className='py-6 px-1 fixed z-50'>
                <IoFishSharp  />
                <h2 className="uppercase text-sm text-white">sun fish</h2>
            </div>
        </Link>
    </div>
  )
}

export default Logo