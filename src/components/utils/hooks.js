import { useQuery } from "@tanstack/react-query";
import { commerce } from "../../lib/commerce";


//// Fetching a product details
export const useProductDetails = (id) => {
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

    return { isLoading, error, productDetails }
}