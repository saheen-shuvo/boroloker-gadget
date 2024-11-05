import { NavLink } from "react-router-dom";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
        {/* Banner Div */}
      <div className="bg-[#9538E2] pb-10">
        <h1 className="text-3xl font-semibold py-5 text-center text-white">
          Dashboard
        </h1>
        <p className="text-center text-[#ffffffb9] pb-5 text-xs w-[90%] lg:w-[40%] mx-auto lg:text-sm">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className=" flex gap-3 justify-center ">
        <NavLink><button className="btn w-[100px] rounded-full">Cart</button></NavLink>
        <NavLink><button className="btn rounded-full w-[100px]">Wishlist</button></NavLink>
      </div>
      </div>
      {/* MAin Div */}
      <div className="flex items-center justify-between mx-48 mt-14">
        {/* Nav Div */}
            <div>
                <h1 className="text-xl font-semibold">Cart</h1>
            </div>
            <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">Total Cost: 99999</h2>
                <NavLink><button className="flex items-center gap-1 border-2 px-2 py-1 rounded-3xl font-semibold text-purple-800 border-purple-800">Sort by Price<MdOutlineSettingsInputComposite /></button></NavLink>
                <NavLink><button className="flex items-center gap-1 border-2 px-2 py-1 rounded-3xl font-semibold border-purple-800">Purchase</button></NavLink>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
