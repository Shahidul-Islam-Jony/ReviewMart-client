import { useState } from "react";
import useGetAllProducts from "../../hooks/useGetAllProducts";

const Products = () => {
  let [products, isLoading] = useGetAllProducts();
  // console.log(products);
  const [category, setCategory] = useState("");
  const [sortOption,setSortOption] = useState("");
  if (isLoading) {
    return (
      <div className="text-5xl flex justify-center items-center min-h-screen">
        <span className="loading size-16 loading-spinner text-info"></span>
      </div>
    );
  }

  // set filtered text
  const handleCategory = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setCategory(e.target.value);
  };
  // console.log(category);

  // filtered logic
  const filteredProducts = category? products.filter((product) => product?.category === category): products;
  // console.log(filteredProducts);

  // store sorted option
 const handleSort = e =>{
    const option = e.target.value;
    setSortOption(option);
 }

// Sorting logic
 const sortedProducts = sortOption === "low to high" ? [...filteredProducts].sort((a,b)=>a.price - b.price): sortOption === "high to low" ? [...filteredProducts].sort((a,b)=>b.price - a.price): filteredProducts;


  return (
    <div className="my-10">
      <div className="flex justify-evenly my-7">
        <div>
          <select
          onChange={handleSort}
          className="select select-info w-full max-w-xs"
          >
            <option disabled selected>
              Sorting by Price
            </option>
            <option value="low to high">low to high</option>
            <option value="high to low">high to low</option>
          </select>
        </div>
        <div>
          <select
            onChange={handleCategory}
            className="select select-info w-full max-w-xs"
          >
            <option disabled selected>
              Filter by Category
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Wearables">Wearables</option>
            <option value="Computers">Computers</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Home Automation">Home Automation</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {
        sortedProducts?.map((product) => (
          <div key={product?._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={product?.image}
                  className="w-full h-60"
                  alt={product?.name}
                />
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
