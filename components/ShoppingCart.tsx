import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import { Offcanvas, Stack } from "react-bootstrap"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"





type ShoppingCartProps = {
    isOpen: boolean
  }


const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {

const { closeCart, cartItems } = useShoppingCart()

  return (
    <Offcanvas className='bg-yellow-600 w-96 absolute h-screen' show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header className=' p-20' closeButton>
        <Offcanvas.Title className='text-8xl'>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack className='px-20'>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="text-white px-4 text-2xl font-bold">
            Total 44{" "}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart