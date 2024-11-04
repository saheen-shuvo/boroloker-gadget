import { NavLink } from "react-router-dom";
import Gadgets from "../gadgets/Gadgets";

const HomeSide = () => {
    return (
        <div className="mx-36 mt-96">
        <h2 className="text-center text-3xl font-bold mb-7">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex">
          {/* Left Side */}
          <div className="w-[20%] h-[380px] border-2 border-red-900 bg-slate-200 rounded-2xl">
            <NavLink>
              <h3 className="px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3">
                All Products
              </h3>
            </NavLink>
            <NavLink>
              <h3 className="px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3">
                Laptops
              </h3>
            </NavLink>
            <NavLink>
              <h3 className="px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3">
                Phones
              </h3>
            </NavLink>
            <NavLink>
              <h3 className="px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3">
                Accessories
              </h3>
            </NavLink>
            <NavLink>
              <h3 className="px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3">
                Smart Watches
              </h3>
            </NavLink>
            <NavLink>
              <h3 className="px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3">
                Mac Books
              </h3>
            </NavLink>
            <NavLink>
              <h3 className="px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3">
                Iphone
              </h3>
            </NavLink>
          </div>
          {/* Right Side */}
          <div className="w-[80%] border-2 border-green-800 rounded-2xl bg-slate-200 ml-4">
          <Gadgets></Gadgets>
          </div>
        </div>
      </div>
    );
};

export default HomeSide;