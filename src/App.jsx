import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './Features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import ProtectedRoute from './features/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: (
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        ),
        loader: menuLoader,
        errorElement: <Error />,
      },
      { 
        path: '/cart', 
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ) 
      },
      {
        path: '/order/new',
        element: (
          <ProtectedRoute>
            <CreateOrder />
          </ProtectedRoute>
        ),
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: (
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        ),
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;