import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'

const Classes = () => {
  return (
    <section>
        <Head>
        <title>SUN FISH</title>
        <link rel="icon" href="/fish.png" />
         </Head>

        <Logo></Logo>
        <Navbar></Navbar>
        <div className='grid grid-cols-1 xl:grid-cols-3 xl:h-screen w-screen absolute overflow-hidden cursor-pointer'>
            <Link href="/Ramen">
                <div className="overflow-hidden relative">
                        <div className="ClassOne flex hover:scale-105 transition duration-1000	h-screen justify-center items-center">
                            <h1 className="text-white w-80 h-24 hover:text-yellow-500 bg-gray-400 border-gray-200  backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 flex justify-center items-center text-5xl font-light uppercase">Ramen</h1>
                        </div>
                </div>
            </Link>
            <Link href='/Sashimi'>
                <div className=" overflow-hidden relative">
                        <div className="ClassTwo flex hover:scale-105 transition duration-1000 h-screen justify-center items-center">
                            <h1 className="text-white w-80 h-24 hover:text-yellow-500 bg-gray-400 border-gray-200  backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 flex justify-center items-center text-5xl font-light uppercase">sashimi</h1>
                        </div>
                </div>
           </Link>
           <Link href='/Sushi'>
                <div className=" overflow-hidden relative">
                        <div className="ClassThree flex hover:scale-105 transition duration-1000 h-screen justify-center items-center">
                            <h1 className="text-white w-96 h-24 hover:text-yellow-500 bg-gray-400 border-gray-200  backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 flex justify-center items-center text-5xl font-light uppercase">sushi rolls</h1>
                        </div>
                </div>
           </Link>
        </div>
    </section>
  )
}

export default Classes