import useGetAllProducts from "../../hooks/useGetAllProducts";

const Products = () => {
  const [products,isLoading] = useGetAllProducts();
  // console.log(products);
  if(isLoading){
    return <div className="text-5xl flex justify-center items-center min-h-screen"><span className="loading size-16 loading-spinner text-info"></span></div>
  }
  return (
    <div className="my-10">
      <div className="flex justify-evenly my-7">
        <div>
          <select className="select select-info w-full max-w-xs">
            <option disabled selected>
              Sorting by Price
            </option>
            <option>low to high</option>
            <option>high to low</option>
          </select>
        </div>
        <div>
          <select className="select select-info w-full max-w-xs">
            <option disabled selected>
              Filter by Category
            </option>
            <option>Phone</option>
            <option>Laptop</option>
            <option>Refregrator</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product?._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={product?.image} className="w-full h-60" alt={product?.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
              </div>
              <div className="flex justify-between p-4">
                <p>price : $ {product?.price}</p>
                <p>Ratings: {product?.average_rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
