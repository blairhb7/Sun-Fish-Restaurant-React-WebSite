import React from 'react'

const landingpage = () => {
  return (
    <div className="grid grid-cols-1 h-screen w-screen">
          <div className="LandingPage flex flex-col justify-center items-center ">
            <h3 className="text-white text-xl uppercase">tokyo | london | new york</h3>
            <h1 className="text-white xl:text-9xl text-6xl p-0 m-0 font-light uppercase"> sun <span className='text-red-500'>fish</span></h1>
            <p className="text-white uppercase"> Taste Of Japan</p>
          </div>
    </div>
  )
}

export default landingpage