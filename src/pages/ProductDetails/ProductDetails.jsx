import { useParams } from "react-router-dom";
import useGetSingleProduct from "../../hooks/useGetSingleProduct";

const ProductDetails = () => {
    const {id} = useParams();
    console.log(id);

    const product = useGetSingleProduct(id);
    // console.log(product[0]);

    return (
        <div>
            {product[0]?.name}
        </div>
    );
};

export default ProductDetails;