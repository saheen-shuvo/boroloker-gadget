import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../routes/cartContext";
import { TiDelete } from "react-icons/ti";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [sortedItems, setSortedItems] = useState(cartItems);
  const [totalCost, setTotalCost] = useState(0);
  console.log(cartItems);
  const modalRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    setSortedItems(cartItems);
    const cost = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalCost(cost);
  }, [cartItems]);

  const sortByDescending = () => {
    const sorted = [...cartItems].sort((a, b) => b.price - a.price);
    setSortedItems(sorted);
  };

  const handlePurchase = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    clearCart();
    navigate("/"); 
  };

  return (
    <div className="mx-3 lg:mx-48 mt-14">
      {/* Nav Div */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Cart</h1>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">${totalCost.toFixed(2)}</h2>
          <button
            onClick={sortByDescending}
            className="btn flex items-center gap-1 border-2 px-2 py-1 rounded-3xl font-semibold text-purple-800 border-purple-800"
          >
            Sort by Price
            <MdOutlineSettingsInputComposite />
          </button>
          <NavLink>
            <button
              onClick={handlePurchase}
              disabled={totalCost === 0} 
              className={`flex items-center gap-1 border-2 px-2 py-1 rounded-3xl font-semibold btn ${
                totalCost === 0 ? "bg-gray-300 cursor-not-allowed border-gray-400 opacity-35" : "bg-purple-600 text-white border-purple-800"
              }`}
            >
              Purchase
            </button>
          </NavLink>
        </div>
      </div>
      {/* Cards */}
      <div className="">
        {sortedItems.map((item, index) => (
          <div
            key={index}
            className="border-2 rounded-lg my-3 flex flex-col lg:flex-row justify-between items-center"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <img
                className="w-48 h-36 rounded-lg m-2 object-cover object-top"
                src={item.product_image}
                alt=""
              />
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-semibold">{item.product_title}</h4>
                <h4 className="text-sm">{item.description}</h4>
                <h4 className="text-base font-semibold">
                  Price: ${item.price}
                </h4>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.product_id)}
              className="text-red-700 text-5xl"
            >
              <TiDelete />
            </button>
          </div>
        ))}
      </div>
      {/* Modal */}
      <dialog ref={modalRef} id="my_modal_1" className="modal">
        <div className="modal-box">
          <img className="mx-auto" src="../../../public/images/Group.png" alt="" />
          <h3 className="font-bold text-xl text-center pt-4">Payment Successfully!</h3>
          <p className="py-4 text-center">Thanks for purchasing<br></br>
            Your total Bil: ${totalCost?.toFixed(2)}
          </p>
          <div className="modal-action mt-0 flex justify-center">
            <form method="dialog">
              <button onClick={closeModal} className="btn bg-purple-600 text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
