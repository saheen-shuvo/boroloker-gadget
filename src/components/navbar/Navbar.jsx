import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
const Navbar = () => {
  return (
    <section className="relative">
      <section className="h-[550px] bg-[#9538E2] mx-2 lg:mx-10 mt-1 lg:mt-5 rounded-lg lg:rounded-3xl">
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
                  className="h-5 w-5 text-white"
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Statistics</a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white px-0 mx-0">
              Boroloker Gadget
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-semibold">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Statistics</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end"></div>
          <div className="text-xl border-2 p-1 rounded-full bg-white">
            <a href="/">
              <FiShoppingCart />
            </a>
          </div>
          <div className="text-xl border-2 p-1 rounded-full bg-white ml-2">
            <a href="/">
              <IoMdHeartEmpty />
            </a>
          </div>
        </div>
        <div className="lg:w-[50%] mx-auto flex flex-col justify-center">
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
      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 top-96">
        <img className="object-contain " src="./images/banner.jpg" alt="" />
      </div>
    </section>
  );
};

export default Navbar;
