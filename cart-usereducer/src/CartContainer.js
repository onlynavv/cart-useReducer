import React from 'react'
import { useGlobalContext } from './context'
import CartItem from './CartItem'
import './index.css'

const CartContainer = () => {

    const {cart,total,clearCart} = useGlobalContext()

    if(cart.length === 0){
        return (
        <div>
            <header style={{textAlign:'center'}}>
                <h3>Your Bag</h3>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </div>
    )
    }

    return(
        <div className='cart'>
            <h3>Your Bag</h3>
            <div>
                {cart.map((items)=>{
                const {id} = items
                return(
                    <CartItem key={id} {...items} />
                )
            })}
            </div>
            <footer>
                <hr />
                <div className='total-cart'>
                    <h4>Total</h4>
                    <h4>${total}</h4>
                </div>
                <button className='btn clear-btn' onClick={clearCart}>Clear</button>
            </footer>
        </div>
    )
    
}

export default CartContainer
