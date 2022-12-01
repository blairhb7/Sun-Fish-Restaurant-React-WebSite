import Link from 'next/link'
import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'

const Sushi = () => {
  return (
    <section>
        <Logo></Logo>
        <Navbar></Navbar>
        <div className="grid  grid-cols-1 xl:grid-cols-3 ">
            <div className="ClassThree h-screen bg-center col-span-2 flex justify-center items-center">
                <h1 className=" flex text-6xl text-white  font-semibold">Learn How To Cook Sushi Rolls</h1>
            </div>
            
            <div className=" xl:h-screen bg-[#040404] flex flex-col scroll overflow-y-scroll scrollbar-hide scroll-smooth  pt-20 pl-12">
                <h2 className=" text-white text-sm">Cooking Class</h2>
                <h1 className=" text-white text-6xl hover:text-yellow-500 transition duration-1000">Reserve your spot</h1>
                <p className=" text-white text-sm w-[80%] pt-6">
                You will learn how to cook sushi rice (this is one of the most important things to master in order to make good sushi), 
                how to prepare ingredients (ie how to straighten shrimp, cook egg/tamago, how to slice vegetables, sashimi etc...)
                 and how to hand-roll sushi (hand roll-Temaki, thick roll- Futo maki).
                </p>
                <Link href="/"><button className=" uppercase text-white bg-red-500 rounded-full mt-5 p-3">book a spot</button><span className=' text-white px-8 text-xl'>$89</span></Link>
                <div className=" xl:h-[1000px] flex flex-col mt-28 mb-28">
                    <h2 className=" text-white text-4xl font-semibold uppercase"> Details</h2>
                    <div className="grid grid-cols-2">
                        <p className="text-white p-2">Teacher</p>
                        <p className="text-white p-2">Harumi Kurihara</p>
                        
                        <p className="text-white p-2">Location</p>
                        <p className="text-white p-2">Sun Fish <br/> 17 Main ST <br/> New York, NY</p>
                        
                        <p className="text-white p-2">Date</p>
                        <p className="text-white p-2">July 2 2023</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sushi