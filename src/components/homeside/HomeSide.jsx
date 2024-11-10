
import { Helmet } from "react-helmet-async";
import Gadgets from "../gadgets/Gadgets";
import { useEffect, useState } from "react";

const HomeSide = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]); 
  const [isActive, setIsActive] = useState("allProduct");

  useEffect(() => {
    fetch("/gadgetdata/data.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data);
  });
  }, []);

  const findGadgetsByCategories = (category) => {
    if (category) {
      const findCategoryGadget = gadgets.filter(
        (gadget) => gadget?.category === category
      );
      setFilteredGadgets(findCategoryGadget);
      setIsActive(category);
      console.log(category);
      console.log(findCategoryGadget);
    } else {
      setFilteredGadgets(gadgets); 
      setIsActive("allProduct");
    }
  };


  return (
    <>
    <Helmet>
    <title>Boroloker Gadgets | Home</title>
    </Helmet>
    <div className="mx-2 lg:mx-36 mt-48 lg:mt-96">
      <h2 className="text-center text-xl lg:text-4xl font-bold mb-7">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="text-center font-semibold w-full lg:w-[20%] h-[380px] bg-white rounded-2xl">
          <h3
            onClick={() => findGadgetsByCategories()}
            className={`px-4 py-2 rounded-3xl mx-3 my-3 ${isActive === "allProduct" ? "bg-[#9538E2] text-white" : "bg-[#F6F6F6]"}`}
          >
            All Products
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("laptop")}
            className={`px-4 py-2 rounded-3xl mx-3 my-3 ${isActive === "laptop" ? "bg-[#9538E2] text-white" : "bg-[#F6F6F6]"}`}
          >
            Laptops
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("android")}
            className={`px-4 py-2 rounded-3xl mx-3 my-3 ${isActive === "android" ? "bg-[#9538E2] text-white" : "bg-[#F6F6F6]"}`}
          >
            Phones
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("accessory")}
            className={`px-4 py-2 rounded-3xl mx-3 my-3 ${isActive === "accessory" ? "bg-[#9538E2] text-white" : "bg-[#F6F6F6]"}`}
          >
            Accessories
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("smartwatch")}
            className={`px-4 py-2 rounded-3xl mx-3 my-3 ${isActive === "smartwatch" ? "bg-[#9538E2] text-white" : "bg-[#F6F6F6]"}`}
          >
            Smart Watches
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("macbook")}
            className={`px-4 py-2 rounded-3xl mx-3 my-3 ${isActive === "macbook" ? "bg-[#9538E2] text-white" : "bg-[#F6F6F6]"}`}
          >
            Mac Books
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("iPhone")}
            className={`px-4 py-2 rounded-3xl mx-3 my-3 ${isActive === "iPhone" ? "bg-[#9538E2] text-white" : "bg-[#F6F6F6]"}`}
          >
            Iphone
          </h3>
        </div>
        {/* Right Side */}
        <div className="w-full mt-3 lg:mt-0 lg:w-[80%] rounded-2xl lg:ml-4">
          <Gadgets gadgets={filteredGadgets}></Gadgets>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeSide;
