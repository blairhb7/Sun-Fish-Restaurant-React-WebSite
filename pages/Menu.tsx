import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import { IoFishSharp } from "react-icons/io5";
import Link from 'next/link'
import Menunav from '../components/Menunav';
import {StoreItem} from '../components/StoreItem'
import storeItems from '../data/items.json'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    info: string, 
    title: string,
}

const Menu = () => {
  return (
    <section>
        <Logo></Logo>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 xl:grid-cols-2 scrollbar-hide">
            <div className="MenuPic z-10 flex flex-col pt-60 xl:pt-24 items-center h-screen">
                <h3 className="uppercase text-black text-3xl font-medium">check out</h3>
                <h2 className="text-black uppercase text-6xl font-bold">our menu</h2>
            </div>
            <div className="bg-[#040404] h-screen overflow-hidden pb-60 scroll overflow-y-scroll scrollbar-hide scroll-smooth">
            <Menunav></Menunav> 
                <div className="flex flex-col justify-center pt-6 scrollbar-hide">
                <div className="">
                    {storeItems.map(item => (
                        <div key={item.id}>
                            <StoreItem {...item} />
                        </div>
                    ))}
                </div>
                    
                    <h2 className="uppercase text-7xl text-white flex justify-center mt-60 pb-10">Locations</h2>
                    <div className="grid grid-cols-2 scrollbar-hide mx-auto gap-5">
                        <h1 className="text-white text-2xl p-2 flex text-center">Sun Fish <br/> Tokyo | London | New York</h1>
                        <p className="text-white text-xl flex text-center justify-center p-2">Sun Fish | <br/> 17 Main ST |<br/> New York, NY|</p>
                    </div>
                    <IoFishSharp />
                    <p className="flex justify-center text-center text-gray-700 text-xs pt-6">
                        Develope By Blair Chappell
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu