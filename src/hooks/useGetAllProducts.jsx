import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetAllProducts = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = {}, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all/products')
            return res.data;
        }
    })
    // console.log(products);
    return [products, isLoading, refetch];
}

export default useGetAllProducts;