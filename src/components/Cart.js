
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utility/cartSlice';
import { Link } from "react-router";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart =() => {
    dispatch(clearCart());

  }
  return (
    <div className='flex flex-col items-center justify-center mt-8 p-8'>
      <h1 className='font-bold text-2xl text-slate-900'>Secure Checkout</h1>
      {(!cartItems || cartItems.length === 0) ? (
       <div className='flex flex-col items-center'>
          <div className=' font-semibold text-md text-slate-500 p-4 m-2'>You have not added anything yet!  
          </div>
          <button className='no-link style bg-orange-500 rounded-md hover:shadow-lg font-semibold text-white px-4 py-2'>
            <Link to="/">Go to Restaurants</Link>
          </button>
       </div>
      ) : (
        <div className='flex flex-col w-1/2 shadow-lg p-4 m-4'>

          <ItemList items={cartItems}/>
          <button onClick={handleClearCart} className='bg-red-600 text-white cursor-pointer font-semibold px-4 py-2 rounded-lg w-[150px]'>Clear Cart</button>
        </div>
      )}
    </div>
  )
}

export default Cart
