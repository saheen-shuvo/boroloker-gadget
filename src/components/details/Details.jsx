import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { CartContext } from "../../routes/cartContext";


const Details = () => {

  const {addToCart, cartItems, addToWishlist} = useContext(CartContext);
  console.log(cartItems)
  const { product_id } = useParams();
  console.log(product_id);

  const [gadgets, setGadgets] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    fetch("/gadgetdata/data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const findProduct = gadgets.find(
    (gadget) => gadget?.product_id === product_id
  );
  console.log(findProduct?.product_title);

  const handleAddToWishlist = () => {
    addToWishlist(findProduct);
    setIsInWishlist(true);
  };

  return (
    <div className="relative mb-96">
      <div className="bg-[#9538E2] h-[250px] lg:h-[300px]">
        <h2 className="text-3xl font-semibold py-5 text-center text-white">
          Product Details
        </h2>
        <p className="text-center text-[#ffffffb9] pb-5 text-xs w-[90%] lg:w-[40%] mx-auto lg:text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      {/* Whole Card */}
      <div className="flex flex-col lg:flex-row  justify-between absolute left-1/2 transform -translate-x-1/2 top-44 lg:top-44  lg:h-[420px] w-[300px] lg:w-[800px] border-2 bg-white rounded-xl">
        <img
          className="lg:h-[393px] object-cover w-[98%] lg:w-[50%] m-1 lg:m-3 rounded-xl border-2"
          src={findProduct?.product_image}
          alt=""
        />
        <div className="lg:w-[50%] m-3 flex flex-col sm:gap-1 justify-evenly">
          <h3 className="text-xl lg:text-2xl font-bold">{findProduct?.product_title}</h3>
          <h5 className="text-lg font-semibold">
            Price: ${findProduct?.price}
          </h5>
          <h3 className="border-2 px-2 py-1 rounded-lg w-[110px] border-purple-950 text-center font-semibold">{`${
            findProduct?.availability ? "In Stock" : "Out of Stock"
          }`}</h3>
          <h3 className="text-sm">{findProduct?.description}</h3>
          <h3 className="font-semibold">
            Specification: 
          </h3>
          <ol>
              {findProduct?.specification?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          <h3 className="flex items-center gap-1 font-semibold">
            Rating
            <FaRegStar />
          </h3>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <h3 className="ml-1 border-2 p-1 text-xs rounded-sm bg-slate-100">{findProduct?.rating}</h3>
          </div>
          <div className="flex items-center gap-2">
          <button onClick={() => addToCart(findProduct)} className="bg-[#9538E2] px-3 py-2 flex items-center gap-2 text-white font-semibold w-[140px] rounded-3xl pr-1 btn"><button>Add to Cart</button> <IoCart /></button>
          <p className=" p-2 rounded-full border-2">
            <button className={`${isInWishlist ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isInWishlist} onClick={() => handleAddToWishlist(findProduct)}><IoMdHeartEmpty /></button></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Details;
