import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'

const Restuarant = () => {
  return (
    <section>
      <Navbar></Navbar>
      <Logo></Logo>
        <div className="container relative z-10 sm:grid-cols-1 lg:grid-cols-3 sm:grid h-[1500px] xl:h-[2000px] gap-2">
          <div className="grid-2"></div>
          <div className="grid-1"></div>
          <div className="grid-3"></div>
          <div className="grid-4"></div>
          <div className="grid-5"></div>
      </div>

</section>
  )
}

export default Restuarant