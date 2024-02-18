import ProductCard from "./ProductCard";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="flex gap-5">
      {relatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default RelatedProducts;
