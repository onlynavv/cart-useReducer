import React,{useContext,useState} from 'react';
import cartItems from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [cart,setCart] = useState(cartItems)

    return(
        <AppContext.Provider value={{cart}}>{children}</AppContext.Provider>
    )
}

// custom hooks
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}