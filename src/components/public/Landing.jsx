import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { commerce } from "../../lib/commerce";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Landing() {
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    return data;
  };

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  return (
    <div className="antialiased">
      <Navbar />
      <Carousel />

      <div className="flex flex-wrap gap-5 mt-16 px-7">
        <h1 className="w-full font-semibold text-gray-700 text-lg">
          Trending Products
        </h1>

        {products && !isLoading ? (
          products.map((product, index) => (
            <Link key={index}>
              <ProductCard product={product} key={index} />
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
