import { NavLink, Outlet } from "react-router-dom";

const Statistics = () => {
  return (
    <div>
      <div>
        {/* Banner Div */}
        <div className="bg-[#9538E2] pb-10">
          <h1 className="text-3xl font-semibold py-5 text-center text-white">
            Statistics
          </h1>
          <p className="text-center text-[#ffffffb9] text-xs w-[90%] lg:w-[40%] mx-auto lg:text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Statistics;
