import { useParams } from "react-router-dom";
import useGetSingleProduct from "../../hooks/useGetSingleProduct";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const product = useGetSingleProduct(id);
  console.log(product);

  return (
    <div className="my-10">
      <div className="flex justify-evenly items-center">
        <div className="md:w-96">
          <img src={product[0]?.image} alt="" />
        </div>
        <div>
          <p className="text-xl font-medium">{product[0]?.description}</p>
          <div>
            <h3 className="font-bold">
              <u>Specifications : </u>
            </h3>
            {product[0]?.specifications &&
              Object.entries(product[0]?.specifications).map(([key, value]) => (
                <div key={key}>
                  <li>
                    <strong>{key.replace("_", " ")}:</strong> {value}
                  </li>
                </div>
              ))}
          </div>

          <div className="flex justify-between">
            <p className="font-bold text-xl">Price : $ {product[0]?.price}</p>
            <p className="font-bold text-xl">
              Availability : {product[0]?.availability}
            </p>
          </div>
        </div>
      </div>

      {/* Rating showing */}

      <div className="mt-5 flex justify-evenly items-center">
        <div>
          <h3 className="text-5xl font-bold">{product[0]?.average_rating}</h3>
          <Rating
            style={{ maxWidth: 80 }}
            value={product[0]?.average_rating}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-4">
          {product[0]?.rating_distribution&&Object.entries(product[0].rating_distribution).map(([key, value]) => (
            <div key={key}>
              <label>
                {key.replace("_", " ")}: {value}%
              </label>
              <progress
                className="progress progress-info w-56"
                value={value}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
