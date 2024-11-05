import { useEffect, useState } from "react";
import Gadget from "../gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("../../../public/gadgetdata/data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {gadgets.map((gadget) => (
          <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
