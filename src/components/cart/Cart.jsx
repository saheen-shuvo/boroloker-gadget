import { useContext, useState } from "react";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../routes/cartContext";
import { TiDelete } from "react-icons/ti";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [sortedItems, setSortedItems] = useState(cartItems);

  const sortByDescending = () => {
    const sorted = [...cartItems].sort((a,b) => b.price - a.price);
    setSortedItems(sorted);
  }

  return (
    <div>
      {/* MAin Div */}
      <div className="flex items-center justify-between mx-48 mt-14">
        {/* Nav Div */}
        <div>
          <h1 className="text-xl font-semibold">Cart</h1>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Total Cost: 99999</h2>
            <button onClick={sortByDescending} className="flex items-center gap-1 border-2 px-2 py-1 rounded-3xl font-semibold text-purple-800 border-purple-800">
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
      <div className="mx-48">
        {sortedItems.map((item, index) => (
          <div
            key={index}
            className="border-2 rounded-lg my-3 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-48 h-36 rounded-lg m-2 object-cover object-top"
                src={item.product_image}
                alt=""
              />
              <div className="flex items-center">
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-semibold">{item.product_title}</h4>
                <h4 className="text-sm">{item.description}</h4>
                <h4 className="text-base font-semibold">
                  Price: ${item.price}
                </h4>
              </div>
              <div className="mr-8 items-center">
                <button className="text-red-700 text-5xl"><TiDelete /></button>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

// <div>
//   {selectedPlayers.map((player, index) => (
//     <div
//       key={index}
//       className="border-2 rounded-lg my-3 flex justify-between items-center"
//     >
//       <div className="flex items-center gap-2">
//         <img
//           className="w-24 h-24 rounded-lg m-2 object-cover object-top"
//           src={player.image}
//           alt=""
//         />
//         <div>
//           <h4 className="text-xl font-semibold">{player.name}</h4>
//           <h4 className="text-sm">{player.role}</h4>
//           <h4 className="text-sm">{player.biddingPrice} $</h4>
//         </div>
//       </div>
//       <div className="mr-8">
//         <button onClick={() => handleDelete(player.playerId)}>
//           <i className="fa-regular fa-trash-can text-2xl text-red-700"></i>
//         </button>
//       </div>
//     </div>
//   ))}
//   <button onClick={() => {setTabs('AvailablePlayer'); handleIsActiveState('card')}} className="bg-green-900 mt-10 py-3 px-4 rounded-xl text-white outline outline-2 outline-green-900 outline-offset-4 font-semibold">
//     Add More Player
//   </button>
// </div>
