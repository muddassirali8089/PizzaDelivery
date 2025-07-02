import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./ui/Home.jsx"
import Menu from "./Features/menu/Menu.jsx"
import Cart from './Features/cart/Cart'
import CreateOrder from './Features/order/CreateOrder'
import Order from './Features/order/Order'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path : "/menu",
    element : <Menu/>
  },
  {
    path : "/cart",
    element : <Cart/>
  },
  {
    path : "/order/new",
    element : <CreateOrder/>
  },

  {
    path : "/order/orderId",
    element : <Order/>
  },

])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App