import phone from "../../assets/images/iphone.jpg";

const Products = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        {arr.map((item, idx) => (
          <div key={idx}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={phone} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">iphone 15 pro</h2>
              </div>
              <div className="flex justify-between p-4">
                <p>price : $999</p>
                <p>Ratings: 5.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
