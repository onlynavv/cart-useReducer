import React from 'react'
import { useGlobalContext } from './context'
import {FaArrowUp,FaArrowDown} from 'react-icons/fa'
import './index.css'

const CartItem = ({id,img,amount,title,price}) => {
    const {removeItem} = useGlobalContext()
    return (
        <div className='cart-item'>
            <img src={`${img}`} alt={title}></img>
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>{price}</h4>
                <button className='remove-btn' onClick={()=>removeItem(id)}>Remove</button>
            </div>
            <div>
                <button className='amount-btn'>
                    <FaArrowUp />
                </button>
                <p>{amount}</p>
                <button className='amount-btn'>
                    <FaArrowDown />
                </button>
            </div>    
        </div>
    )
}

export default CartItem
