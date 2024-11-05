
import Gadgets from "../gadgets/Gadgets";
import { useEffect, useState } from "react";

const HomeSide = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]); 
  const [isActive, setIsActive] = useState("allProduct");

  useEffect(() => {
    fetch("../../../public/gadgetdata/data.json")
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
    <div className="mx-2 lg:mx-36 mt-48 lg:mt-96">
      <h2 className="text-center text-xl lg:text-4xl font-bold mb-7">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="text-center font-semibold w-full lg:w-[20%] h-[380px] border-2 bg-slate-200 rounded-2xl">
          <h3
            onClick={() => findGadgetsByCategories()}
            className={`px-4 py-2 rounded-3xl mx-3 my-3 ${isActive === "allProduct" ? "bg-red-700" : "bg-yellow-600"}`}
          >
            All Products
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("laptop")}
            className={`px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3 ${isActive === "laptop" ? "bg-red-700" : "bg-yellow-600"}`}
          >
            Laptops
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("android")}
            className={`px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3 ${isActive === "android" ? "bg-red-700" : "bg-yellow-600"}`}
          >
            Phones
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("accessory")}
            className={`px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3 ${isActive === "accessory" ? "bg-red-700" : "bg-yellow-600"}`}
          >
            Accessories
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("smartwatch")}
            className={`px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3 ${isActive === "smartwatch" ? "bg-red-700" : "bg-yellow-600"}`}
          >
            Smart Watches
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("macbook")}
            className={`px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3 ${isActive === "macbook" ? "bg-red-700" : "bg-yellow-600"}`}
          >
            Mac Books
          </h3>

          <h3
            onClick={() => findGadgetsByCategories("iPhone")}
            className={`px-4 py-2 bg-purple-400 rounded-3xl mx-3 my-3 ${isActive === "iPhone" ? "bg-red-700" : "bg-yellow-600"}`}
          >
            Iphone
          </h3>
        </div>
        {/* Right Side */}
        <div className="w-full mt-3 lg:mt-0 lg:w-[80%] border-2 rounded-2xl bg-slate-200 lg:ml-4">
          <Gadgets gadgets={filteredGadgets}></Gadgets>
        </div>
      </div>
    </div>
  );
};

export default HomeSide;
