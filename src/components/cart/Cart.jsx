import { useContext, useEffect, useState } from "react";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../routes/cartContext";
import { TiDelete } from "react-icons/ti";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [sortedItems, setSortedItems] = useState(cartItems);
  const [totalCost, setTotalCost] = useState(0);
  console.log(cartItems);

  useEffect(() => {
    setSortedItems(cartItems);
    const cost = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalCost(cost);
  }, [cartItems]);

  const sortByDescending = () => {
    const sorted = [...cartItems].sort((a, b) => b.price - a.price);
    setSortedItems(sorted);
  };

  return (
    <div className="mx-48 mt-14">
      {/* Nav Div */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Cart</h1>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">${totalCost.toFixed(2)}</h2>
          <button
            onClick={sortByDescending}
            className="flex items-center gap-1 border-2 px-2 py-1 rounded-3xl font-semibold text-purple-800 border-purple-800"
          >
            Sort by Price
            <MdOutlineSettingsInputComposite />
          </button>
          <NavLink>
            <button className="flex items-center gap-1 border-2 px-2 py-1 rounded-3xl font-semibold border-purple-800">
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
            className="border-2 rounded-lg my-3 flex justify-between items-center"
          >
            <div className="flex items-center">
              <img
                className="w-48 h-36 rounded-lg m-2 object-cover object-top"
                src={item.product_image}
                alt=""
              />
              <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-semibold">
                    {item.product_title}
                  </h4>
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
    </div>
  );
};

export default Cart;