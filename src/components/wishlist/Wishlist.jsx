import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../routes/cartContext";
import { TiDelete } from "react-icons/ti";

const Wishlist = () => {
  const { wishItems, removeFromWishlist } = useContext(CartContext);
  const [sortedItems, setSortedItems] = useState(wishItems);


  useEffect(() => {
    setSortedItems(wishItems);
  }, [wishItems]);
  return (
    <div className="mx-3 lg:mx-48 mt-14">
      <h1 className="text-xl font-semibold">Wishlist</h1>
      <div className="">
        {sortedItems.map((item) => (
          <div className=" border-2 rounded-lg my-3 flex flex-col lg:flex-row items-center justify-between">
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
            <div>
              <button
                onClick={() => removeFromWishlist(item.product_id)}
                className="text-red-700 text-5xl"
              >
                <TiDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
