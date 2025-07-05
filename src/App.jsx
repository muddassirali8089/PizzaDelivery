import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from './ui/AppLayout'
import Home from './ui/Home'
import Menu ,  {loader as menuLoader} from './Features/menu/Menu'
import Cart from './Features/cart/Cart'
import CreateOrder , {action as createOrderAction } from './Features/order/CreateOrder'
import Order  , {loader as orderLoader} from "./Features/order/Order.jsx";
// import SearchOrder  from './Features/order/SearchOrder.jsx'
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
        action: createOrderAction,
      },
      {
        path: "order/:orderId", 
        element: <Order />,
        loader:orderLoader,
        errorElement: <Error/>,

       
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
