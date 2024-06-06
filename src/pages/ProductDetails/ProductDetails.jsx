import { useParams } from "react-router-dom";
import useGetSingleProduct from "../../hooks/useGetSingleProduct";
import { Rating } from "@smastrom/react-rating";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";

import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const product = useGetSingleProduct(id);
  console.log(product);

  const { user } = useContext(AuthContext);

  const AxiosPublic = useAxiosPublic();

  const handleGiveReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewer_name = form.name.value;
    const rating = form.rating.value;
    const review_text = form.comment.value;
    // console.log(reviewer_name,review_text,rating);

    const reviewData = {
      reviewer_name,
      rating,
      review_text,
    };

    AxiosPublic.post(`/give/review/${product[0]._id}`, reviewData)
      .then((res) => {
        console.log(res);
        alert("Review submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-10">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
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

          <div className="flex flex-col md:flex-row justify-between">
            <p className="font-bold text-xl">Price : $ {product[0]?.price}</p>
            <p className="font-bold text-xl">
              Availability : {product[0]?.availability}
            </p>
          </div>
        </div>
      </div>

      {/* Rating showing */}

      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div>
          <h3 className="text-5xl font-bold">{product[0]?.average_rating}</h3>
          <Rating
            style={{ maxWidth: 80 }}
            value={product[0]?.average_rating}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-4">
          {product[0]?.rating_distribution &&
            Object.entries(product[0].rating_distribution).map(
              ([key, value]) => (
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
              )
            )}
        </div>
      </div>

      {/* Give Reviews */}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div className="flex justify-between md:px-5 mt-10">
        <h2 className="text-xl font-medium">All Reviewers</h2>
        <div>
          <button
            className="btn bg-blue-300 md:w-60"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Give Review
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-fit max-w-5xl">
              <div className="modal-action flex flex-col gap-2">
                <form onSubmit={handleGiveReview}>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Username"
                      name="name"
                      defaultValue={user?.displayName}
                      readOnly
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="number"
                      className="grow"
                      placeholder="Give Ratings"
                      name="rating"
                      required
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="write your comment"
                      name="comment"
                    />
                  </label>
                  <input
                    className="btn btn-sm w-full mt-5"
                    type="submit"
                    value="submit"
                  />
                </form>
                <form className="flex justify-end" method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      {/* users reviews */}

      <div className="mt-7">
        {product[0]?.reviews &&
          product[0].reviews.map((reviewer) => (
            <div className="bg-blue-200 mb-3 p-4 rounded-lg" key={reviewer._id}>
              <h2>{reviewer?.reviewer_name}</h2>
              <div className="flex gap-4">
                <Rating
                  style={{ maxWidth: 80 }}
                  value={reviewer?.rating}
                  readOnly
                />
                <p>{reviewer.date && reviewer?.date.split("T")[0]}</p>
              </div>
              <p>{reviewer?.review_text}</p>
              <div className="flex gap-8 items-center text-xl">
                <span className="flex gap-4 items-center">
                  <AiOutlineLike /> {reviewer?.likes}
                </span>
                <span className="flex gap-4 items-center">
                  <AiOutlineDislike /> {reviewer?.dislikes}
                </span>
                <button className="btn btn-sm btn-outline">
                  <CiLocationArrow1 /> Replay
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetails;
