import { AiFillProduct } from "react-icons/ai";
import { FaBox } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="my-20">
      <div>
        <h2 className="text-3xl font-bold text-center">About us</h2>
        <p className="text-center">
          Order now and purchase your favourite products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="text-6xl justify-center bg-blue-300 rounded-full p-4">
              <AiFillProduct />
            </span>
          </div>
          <h4 className="text-xl font-bold">Large Assortment</h4>
          <p>
            we offer many different types of products <br /> with fewer
            variations in each category.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <span className="text-6xl justify-center bg-blue-300 rounded-full p-4">
              <FaBox />
            </span>
          </div>
          <h4 className="text-xl font-bold">Fast & Free Shipping</h4>
          <p>
            4-day or less delivery time, free shipping <br />
            and an expedited delivery option.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <span className="text-6xl justify-center bg-blue-300 rounded-full p-4">
              <BsFillTelephoneOutboundFill />
            </span>
          </div>
          <h4 className="text-xl font-bold">24/7 Support</h4>
          <p>
            answers to any business related inquiry <br />
            24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
