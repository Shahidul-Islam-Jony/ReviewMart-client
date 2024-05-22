import Lottie from "lottie-react";      // npm install lottie-react
import reviews from "../../../animation/reviews.json";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center lg:px-2 bg-blue-100 py-10 rounded-lg">
      <div className="">
        <h2 className="text-4xl md:text-7xl font-bold">
          Review and <br />
          trust the product <br />
          you love.
        </h2>
        <p className="mt-5 text-xl flex text-gray-500">
          <span>500 + <br /> Products</span> <div className="divider lg:divider-horizontal"></div>  <span>5000 + <br />Reviews</span>
        </p>
        <label className="input input-bordered flex items-center gap-2 mt-7">
          <input type="text" className="grow" placeholder="What are you looking for ?" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="">
        <Lottie className="md:w-[500px] h-96" animationData={reviews} />
      </div>
    </div>
  );
};

export default Banner;
