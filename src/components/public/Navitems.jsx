import { Link } from "react-router-dom";

const Navitems = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-6 text-xs font-bold text-gray-600">
        <Link to="/men">
          <p className="cursor-pointer">MEN'S</p>
        </Link>

        <Link to="/women">
          <p className="cursor-pointer">WOMEN'S</p>
        </Link>

        <Link to="/home-living">
          <p className="cursor-pointer">HOME & LIVING</p>
        </Link>

        <Link to="electronics">
          <p className="cursor-pointer">ELECTRONICS</p>
        </Link>

        <Link to="daily-needs">
          <p className="cursor-pointer">DAILY NEEDS</p>
        </Link>
      </div>
    </div>
  );
};

export default Navitems;
