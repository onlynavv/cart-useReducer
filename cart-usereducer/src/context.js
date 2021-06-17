import React,{useContext,useState,useReducer} from 'react';
import cartItems from './data'

const AppContext = React.createContext();

const initialState = {
    loading:false,
    cart:cartItems,
    total:0,
    amount:0
}

const reducer = (state,action) => {
    if(action.type === 'CLEAR_ITEMS'){
        return {...state,cart:[]}
    }
    if(action.type === 'REMOVE_ITEM'){
        const newCart = state.cart.filter((item)=>{
            return item.id !== action.payload
        })
        return {...state, cart:newCart }
    }
    return state
}

const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)

    const clearCart = () => {
        dispatch({type:'CLEAR_ITEMS'});
    }

    const removeItem = (id) => {
        dispatch({type:'REMOVE_ITEM', payload:id})
    }

    return(
        <AppContext.Provider value={{...state,clearCart,removeItem}}>{children}</AppContext.Provider>
    )
}

// custom hooks
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}