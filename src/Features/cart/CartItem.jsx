/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { getCurrentQuantityById } from './cartSlice';
import DeleteItem from './DeleteItem';
import UpdatePizzaItemQuantity from './UpdatePizzaItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

   const currentQuantity = useSelector(
    getCurrentQuantityById(pizzaId)
  );

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdatePizzaItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <DeleteItem pizzaId={pizzaId} key={item.pizzaId}/>
      
      </div>
    </li>
  );
}

export default CartItem;
