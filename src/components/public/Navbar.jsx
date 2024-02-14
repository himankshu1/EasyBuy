import CartIcon from "../utils/CartIcon";
import ProfileIcon from "../utils/ProfileIcon";
import WishlistIcon from "../utils/WishlistIcon";
import Logo from "./Logo";
import Navitems from "./Navitems";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-5 shadow-md text-gray-600 antialiased">
      <Logo />
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
