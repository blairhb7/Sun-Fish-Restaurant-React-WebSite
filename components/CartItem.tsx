import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../Context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { BeakerIcon, ClockIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal"  className="flex w-full justify-center gap-3 py-6 ">
      <div className="grid grid-cols-5 w-full justify-start mx-3">
        <img src={item.imgUrl} alt="" className="w-20 h-20 bg-cover flex justify-center" />
        <span className=" text-white text-xl px-3">{item.name}</span>
        <span className=" text-white px-2">x{quantity}</span>
        <span className=" text-white text-xl px-3">{item.price}</span>
        <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
        className='bg-yellow-500 text-white text-xs p-1 w-7 h-10 flex items-center '
      >
        <XMarkIcon/>
      </Button>
      </div>
    </Stack>
  )
}