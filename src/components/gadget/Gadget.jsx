import { NavLink } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_title, price, product_image } = gadget;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="m-2">
          <img className="h-48 w-full object-contain"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}$</p>
          <div className="border-2 text-center py-1 rounded-3xl border-[#9538E2] text-[#9538E2] font-semibold">
            <NavLink>View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
