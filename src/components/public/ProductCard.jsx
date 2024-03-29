import Bag from "../../assets/Icons/Bag";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // console.log(relatedProducts);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="flex flex-col gap-2 bg-gray-200 px-4 py-5 hover:scale-105 transition-transform duration-300 rounded-sm">
        <div className="w-48 h-48 self-center">
          <img
            src={product?.image?.url}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex justify-between">
          <h2 className="text-sm font-semibold">{product.name}</h2>
          <p className="text-sm font-semibold">
            {product.price.formatted_with_symbol}
          </p>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: product.description }}
          className="text-xs"
        ></p>

        <div className="flex w-full items-center cursor-pointer justify-center bg-gray-300 px-1 py-2 gap-2 mt-1 hover:bg-[#4AAE48] hover:text-white rounded-sm duration-200">
          <Bag />
          <button className="text-sm font-semibold">Add to bag</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
