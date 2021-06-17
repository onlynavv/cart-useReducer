import React from 'react'
import { useGlobalContext } from './context'
import {FaShoppingCart} from 'react-icons/fa'
import './index.css'

const Navbar = () => {

    const {amount} = useGlobalContext()

    return (
        <nav>
            <div className='nav-center'>
                <h3>useReducer</h3>
                <div className='nav-container'>
                    <FaShoppingCart />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
