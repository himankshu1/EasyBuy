import React from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";
import Cart from "../../assets/Icons/Cart";
import Bag from "../../assets/Icons/Bag";
import Wishlist from "../../assets/Icons/Wishlist";
import Star from "../../assets/Icons/Star";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();

  const fetchProductDetailsById = async () => {
    const product = await commerce.products.retrieve(id);
    return product;
  };

  const {
    isLoading,
    error,
    data: productDetails,
  } = useQuery({
    queryKey: ["product details", id],
    queryFn: fetchProductDetailsById,
  });

  console.log(productDetails);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex px-28 py-12 text-gray-700">
      <div className="w-1/4 mr-10">
        <img src={productDetails?.image?.url} className="" />
      </div>

      <div className="w-1/3 mr-14">
        <h1 className="font-bold text-2xl inline-block mr-10 mb-2">
          {productDetails?.name}
        </h1>
        <span
          className={
            productDetails.sku
              ? "text-green-600 font-semibold text-sm"
              : "text-red-600 font-semibold text-sm"
          }
        >
          {productDetails.sku ? "Available" : "Not available"}
        </span>

        <p
          dangerouslySetInnerHTML={{ __html: productDetails.description }}
          className="text-sm mb-2"
        ></p>

        <div className="flex items-center mb-3">
          <p className="font-bold text-lg mr-1">4.2</p>
          <Star />
        </div>

        <hr className="mb-3" />

        <p className="font-bold">
          {productDetails?.price?.formatted_with_symbol}
        </p>
        <p className="text-sm text-gray-600 mb-5">inclusive of all taxes</p>

        <div className="flex mb-8">
          <button className="flex w-full items-center cursor-pointer justify-center bg-gray-300 px-1 py-2 gap-2 mt-1 hover:bg-[#4AAE48] hover:text-white rounded-sm duration-200 mr-4">
            <Bag />
            Add to Cart
          </button>
          <button className="flex w-full items-center cursor-pointer justify-center bg-gray-300 px-1 py-2 gap-2 mt-1 hover:bg-[#4169E1] hover:text-white rounded-sm duration-200">
            <Wishlist />
            Wishlist
          </button>
        </div>

        <hr className="mb-6" />

        <div>
          <p className="font-semibold text-sm mb-2">DELIVERY OPTIONS</p>
          <input
            type="text"
            placeholder="Enter pincode"
            className="border px-2 py-1 mr-2"
          />
          <button className="font-semibold text-[#4AAE48] text-sm">
            Check
          </button>
        </div>
      </div>

      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
