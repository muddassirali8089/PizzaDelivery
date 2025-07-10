import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthenticated, logout } from '../features/user/userSlice';
import Button from './Button'; // Assuming you have a Button component

function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Optional: You might want to redirect to home after logout
    //  navigate('/');
  };


  const IsAuthenticated = useSelector(getIsAuthenticated)

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        pizza Ordering.
      </Link>
      <SearchOrder />
      { IsAuthenticated &&
      <div className="flex items-center gap-4">
        <Username />


       <Button 
        type="black" 
        onClick={handleLogout}
        className="bg-stone-700 text-stone-100 hover:bg-stone-600"
      >
        Logout
      </Button>
      </div>
      }
    </header>
  );
}

export default Header;