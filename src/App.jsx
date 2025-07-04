import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from './ui/AppLayout'
import Home from './ui/Home'
import Menu ,  {loader as menuLoader} from './Features/menu/Menu'
import Cart from './Features/cart/Cart'
import CreateOrder from './Features/order/CreateOrder'
import Order from './Features/order/Order'
import Error from "./ui/Error.jsx"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path :"/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader : menuLoader,
        errorElement: <Error/>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
      },
      {
        path: "order/:orderId", 
        element: <Order />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
