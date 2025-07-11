import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

// import { getIsAuthenticated, logout } from '../features/user/userSlice';


function Header() {

  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   dispatch(logout());
    
  //    navigate('/');
  // };


  // const IsAuthenticated = useSelector(getIsAuthenticated)

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        pizza Ordering.
      </Link>
      <SearchOrder />
 <Username />
     
      
    </header>
  );
}

export default Header;