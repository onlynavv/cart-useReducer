import React from 'react'
import {useGlobalContext} from './context'
import Navbar from './Navbar'
import CartContainer from './CartContainer'

function App() {
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
