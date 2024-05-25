import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetSingleProduct = (id) => {
    const axiosPublic = useAxiosPublic();
    const { data: product = {}, isLoading, refetch } = useQuery({
        queryKey: ['products',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/product/details/${id}`)
            return res.data;
        }
    })
    // console.log(product);
    return [product, isLoading, refetch];
}

export default useGetSingleProduct;