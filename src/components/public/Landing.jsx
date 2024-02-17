import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { commerce } from "../../lib/commerce";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";

function Landing() {
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log(data);
    return data;
  };

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 10000,
  });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="antialiased">
      <Carousel />

      <div className="flex flex-wrap gap-5 mt-16 px-7">
        <h1 className="w-full font-semibold text-gray-700 text-lg">
          Trending Products
        </h1>

        {products && !isLoading ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Landing;
