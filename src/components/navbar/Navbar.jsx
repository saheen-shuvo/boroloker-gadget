import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Navbar = ({isHome}) => {
  return (
    <section className="relative">
      <section className={` mx-2 lg:mx-10 rounded-lg lg:rounded-3xl ${isHome ? "text-white h-[380px] lg:h-[520px] bg-[#9538E2] mt-1 lg:mt-5" : "text-black"}`}>
        <div className="navbar lg:px-16 pt-1 lg:pt-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink>Statistics</NavLink>
                </li>
                <li>
                  <NavLink>Dashboard</NavLink>
                </li>
              </ul>
            </div>
            <a className={`btn btn-ghost text-xl px-0 mx-0 ${isHome ? "text-white" : "text-black"}`}>
              Boroloker Gadget
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className={`menu-horizontal px-1 font-semibold ${isHome ? "text-white" : "text-black"}`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mx-10">
                <NavLink>Statistics</NavLink>
              </li>
              <li>
                <NavLink>Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end"></div>
          <div className="text-xl border-2 p-1 rounded-full bg-white">
            <a className="text-black" href="/">
              <FiShoppingCart />
            </a>
          </div>
          <div className="text-xl border-2 p-1 rounded-full bg-white ml-2">
            <a className="text-black" href="/">
              <IoMdHeartEmpty />
            </a>
          </div>
        </div>
        <div className={`lg:w-[50%] mx-auto flex-col justify-center ${isHome ? "flex" : "hidden"}`}>
          <h1 className="text-center text-white text-2xl lg:text-4xl font-bold pt-4 lg:pt-8 px-1">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-center text-[#ffffffb9] pt-3 lg:pt-6 text-xs px-3 lg:text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="bg-white px-4 py-2 rounded-3xl mx-auto text-[#9538E2] font-semibold mt-5 hover:bg-slate-300">
            Shop Now
          </button>
        </div>
      </section>
      <div className={`justify-center absolute left-1/2 transform -translate-x-1/2 top-80 lg:top-96 h-[220px] lg:h-[420px] w-[300px] lg:w-[800px] border-2 bg-[#ffffff6c] rounded-xl ${isHome ? "flex" : "hidden"}`}>
        <img
          className="lg:h-[393px] w-[98%] lg:w-[100%] object-cover m-1 lg:m-3 rounded-xl"
          src="./images/banner.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Navbar;
