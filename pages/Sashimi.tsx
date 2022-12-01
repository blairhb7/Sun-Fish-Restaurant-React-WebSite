import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'


const Sashimi = () => {
  return (
    <section>
        <Head>
        <title>SUN FISH</title>
        <link rel="icon" href="/fish.png" />
      </Head>

        <Logo></Logo>
        <Navbar></Navbar>
        <div className="grid  grid-cols-1 xl:grid-cols-3 ">
            <div className="ClassTwo h-screen bg-center col-span-2 flex justify-center items-center">
                <h1 className=" flex xl:text-6xl text-4xl text-white px-3 text-center font-semibold">Learn How To Cook Sashimi</h1>
            </div>
            
            <div className=" xl:h-screen bg-[#040404] flex flex-col scroll overflow-y-scroll scrollbar-hide scroll-smooth  pt-20 pl-12">
                <h2 className=" text-white text-sm">Cooking Class</h2>
                <h1 className=" text-white xl:text-6xl text-4xl hover:text-yellow-500 transition duration-1000">Reserve your spot</h1>
                <p className=" text-white text-sm w-[80%] pt-6">
                Discover how to cut fish like a Japanese pro during this unique culinary class. Under the guidance of an instructor, you’ll learn how to cut up a whole fish (high quality and freshly caught) to be eaten as sashimi. 
                 Afterward, eat what you’ve prepared!
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

export default Sashimi