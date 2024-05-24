import iphone from "../../../assets/images/iphone.jpg";
import laptop from "../../../assets/images/hpLaptop.jpeg";
import refregator from "../../../assets/images/waltonRefregrator.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const BestSelling = () => {
  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-3">
        <h2 className="text-3xl font-bold mb-2">
          Best Selling <br /> Products
        </h2>
        <p>
          Buy best selling and <br />
          top rated products from us
        </p>
        <button className="btn bg-blue-300 mt-5">
          See more <FaArrowRightLong />
        </button>
      </div>
      <div className="grid grid-cols-3 col-span-9 gap-4">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
            className="h-64"
              src={iphone}
              alt="iphone"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">iPhone 15 pro</h2>
            <p>$999</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
            className=""
              src={laptop}
              alt="laptop"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hp Laptop</h2>
            <p>$1525</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
            className="w-60"
              src={refregator}
              alt="refregrator"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Walton Refregrator</h2>
            <p>$525</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BestSelling;
