import { Link, NavLink } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_title, price, product_image } = gadget;
  return (
    <Link to={`/details/${product_id}`}>
        <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="m-2">
          <img className="h-48 w-full object-contain"
            src={product_image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}$</p>
          <div className="border-2 text-center py-1 rounded-3xl border-[#9538E2] text-[#9538E2] font-semibold">
            <NavLink to={`/details/${product_id}`}>View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Gadget;
