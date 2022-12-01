import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'


type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    info: string, 
    title: string,
}

export function StoreItem({ id, name, price, imgUrl, info, title }: StoreItemProps){
    const {
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart
    } = useShoppingCart()

    const quantity= getItemQuantity(id)

    return (
        <div className="flex flex-col space-y-1  h-full">
            <a id={title} href="/Ramen"><h1 className="flex text-white text-5xl px-6 py-5 uppercase">{title}</h1></a>
        <div className='flex gap-3 items-center object-cover py-0 md:pl-8'>
            <img className=' w-20 h-20  px-4 md:px-0 md:w-24 md:h-20 object-cover  bg-cover' src={imgUrl}></img>
            <div className="flex flex-col">
            <h3 className=" text-white text-xl flex  px-3">{name}</h3>
            <span className='text-xs text-white px-3 w-40 md:w-60 '>{info}</span>
        </div>
        
        <div className="flex ">
        <span className='text-sm flex justify-end text-white px-3 w-8 lg:w-40 py-2'>{price}</span>
            {quantity === 0 ? (
                <button  className=' w-16 md:w-32 h-8 rounded-full text-xs md:text-sm my-2 text-white bg-red-500' onClick={() => increaseCartQuantity(id)}> + Add To Cart</button>
            ) : <div className='flex items-center flex-col gap-1'>
                    <div className="flex items-center justify-center gap-1 pr-4">
                        <button className="bg-yellow-500 rounded-md w-8 py-1" onClick={() => increaseCartQuantity(id)}>+</button>
                        <div className=" ">
                            <span className=" text-sm md:text-md text-white">{quantity} In Cart</span> 
                        </div>
                        <button  className=" bg-yellow-500 rounded-md w-8 py-1" onClick={() => decreaseCartQuantity(id)} >-</button>
                    </div>
                    <button onClick={() => removeFromCart(id)}  className=" bg-red-500 text-sm md:text-md py-1 my-1 w-14 md:w-24">Remove</button>
                </div>}
        </div>
    </div>
        </div>
    )
}

