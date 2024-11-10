
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('cart');
  return (
    <>
        <Helmet>
    <title>Boroloker Gadgets | Dashboard</title>
    </Helmet>
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
          <NavLink to="/dashboard/cart">
            <button onClick={() => setActiveTab('cart')} className={`btn w-[100px] rounded-full ${activeTab === 'cart' ? "bg-white" : "bg-transparent text-white"}`}>Cart</button>
          </NavLink>
          <NavLink to="/dashboard/wishlist">
            <button onClick={() => setActiveTab('wishlist')} className={`btn rounded-full w-[100px] ${activeTab === 'wishlist' ? "bg-white" : "text-white bg-transparent"}`}>Wishlist</button>
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
    </>
  );
};

export default Dashboard;
