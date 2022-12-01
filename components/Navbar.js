import Link from 'next/link'
import React, { useState } from 'react'
import { BeakerIcon, ClockIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import { CartItem } from './CartItem'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar,  MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { StyledOffCanvas, Menu,  Overlay} from 'styled-off-canvas'
import storeItems from "../data/items.json"


const Navbar = () => {
const { toggleSidebar } = useProSidebar();
const {openCart, cartQuantity} = useShoppingCart()
const [open, setOpen] = useState(false)
const { closeCart, cartItems } = useShoppingCart()

  return (
    <nav>
       <div className="flex justify-center relative w-screen z-40 ">
            <ul className="flex  text-black font-bold rounded-full fixed xl:text-lg text-xs items-center justify-center bottom-3 left-0 right-0 m-auto h-16 xl:w-[540px] sm:w-[440px] p-2  bg-white gap-3 xl:gap-4">
                <li className="tooltip ">
                    <Link href=""><ClockIcon className="h-6 w-6  text-red-500"/>
                        <span className="tooltiptext ">
                            <div className="flex flex-col p-2 font-light ">
                                <h2 className="text-3xl pb-3 uppercase">hours</h2>
                                <p  className='text-base'>11:00am - 5:00pm Tuesday - Thursday</p>
                                <p  className=' text-base'>11:00am - 8:30pm Friday - Sunday</p>
                                <p  className=' text-base'>Closed - Monday</p>
                            </div>
                        </span>
                    </Link>
                </li>
                {cartQuantity > 0 && (<button onClick={() => setOpen(!open)}><li className=""><ShoppingCartIcon  className="h-6 w-6 text-red-500 cursor-pointer flex mt-4"/>
                    <div className=' bg-red-500 text-xs rounded-full'>{cartQuantity}</div>
                </li></button>)}
                <li className=""><Link href="/Restaurant">Restaurant</Link></li>
                <li className=""><Link href="/Menu">Menu</Link></li>
                <li className=""><Link href="/Classes">Classes</Link></li>
                <li className=" uppercase text-white bg-black hover:bg-red-500 transition duration-1000 rounded-full xl:ml-11 xl:p-3 p-2 xl:text-md text-[.6em] xl:w-40 justify-center flex "><Link  href="">Book A Table</Link></li>
            </ul>
       </div>
       <div className='flex '>
       <StyledOffCanvas
       menuBackground = 'rgb(220 38 38)'
       width = '500px'
      isOpen={open}
      onClose={() => setOpen(false)}
    >
      <Menu className='bg-yellow-600' >
       <div className="flex w-full justify-end">
        <XMarkIcon onClick={() => setOpen(false)} className='w-8 h-8 text-white cursor-pointer'/>
       </div>
        <h1 className='text-white text-5xl uppercase font-semibold pt-14 px-3'>Your Cart</h1>
       {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className=" text-white font-semibold text-3xl px-5 gap-4">
            Total{" "}
            {
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
              } $
          </div>
      </Menu>

      <Overlay />
    </StyledOffCanvas >
    </div>
    </nav>
  )
}

export default Navbar