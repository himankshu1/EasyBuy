import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { commerce } from "../../lib/commerce";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Landing() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const { data } = await commerce.products.list();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
