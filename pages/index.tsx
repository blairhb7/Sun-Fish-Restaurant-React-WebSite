import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Landingpage from './landingpage'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>SUN FISH</title>
        <link rel="icon" href="/fish.png" />
      </Head>

      <main>
        <Logo></Logo>
        <Navbar></Navbar>
        <Landingpage></Landingpage>
      </main>
    </div>
  )
}

export default Home
