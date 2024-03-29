import { Link } from "react-router-dom";
import CartIcon from "../../assets/Icons/CartIcon";
import ProfileIcon from "../../assets/Icons/ProfileIcon";
import WishlistIcon from "../../assets/Icons/WishlistIcon";
import Logo from "./Logo";
import Navitems from "./Navitems";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-5 shadow-md text-gray-600 antialiased">
      <Link to="/">
        <Logo />
      </Link>
      <Navitems />
      <SearchBar />

      <div className="flex items-center gap-4">
        <ProfileIcon />
        <WishlistIcon />
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
