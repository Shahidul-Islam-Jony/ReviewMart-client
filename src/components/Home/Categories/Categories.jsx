import iphone from "../../../assets/images/iphone.jpg";
import laptop from "../../../assets/images/hpLaptop.jpeg";
import refregrator from "../../../assets/images/waltonRefregrator.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold">Categories</h3>
        <p>Find what you are looking for</p>
      </div>
      <div className="bg-blue-300 pb-10">
        <div className="grid md:grid-cols-2 lg:relative p-10 gap-6 justify-center text-center">
          <div className="lg:absolute -top-14 left-10">
            <img
              src={iphone}
              className="w-80 border-2 rounded-lg h-96"
              alt=""
            />
            <p className="font-bold">Phone</p>
          </div>
          <div className="lg:absolute top-10 left-1/3">
            <img src={laptop} className="w-96 h-96 rounded-lg" alt="" />
            <p className="font-bold">Laptop</p>
          </div>
          <div className="lg:absolute -top-14 right-10">
            <img
              src={refregrator}
              className="w-80 h-96 border-2 rounded-lg"
              alt=""
            />
            <p className="font-bold">Refregrator</p>
          </div>
        </div>
        <div className="text-center lg:mt-96">
          <p>
            Horem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
          <button className="btn bg-white mt-5">Explore <FaArrowRightLong /></button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
