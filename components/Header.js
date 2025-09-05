import { LOGO_URL } from "../common/common";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";
import { logout } from "../redux/userSlice";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user.user);
  console.log(cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (user) {
      signOut(auth).then(() => {
        dispatch(logout());
        navigate("/");
      });
    } else {
      navigate("/");
    }
  };
  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md bg-white ">
      <div className="flex items-center">
        <img src={LOGO_URL} className="h-12 w-auto" alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          {user ? (
            <Link to="/body" className="hover:text-blue-600">
              <li>Home</li>
            </Link>
          ) : null}

          <Link to="/about" className="hover:text-blue-600">
            <li>About</li>
          </Link>

          <Link to="/cart">
            <li className="hover:text-blue-600 cursor-pointer">
              Cart ({cartItems.length})
            </li>
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/">
              <button className="px-4 py-1 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
                Login
              </button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
