import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

  export default function Bargraph() {
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
      fetch("/gadgetdata/data.json")
        .then((res) => res.json())
        .then((data) => setGadgets(data));
    }, []);

  return (
    <BarChart
      width={1100}
      height={400}
      data={gadgets}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={40}
    >
      <XAxis dataKey="product_title" scale="band" interval={0} angle={-40} textAnchor="end" padding={{ left: 30, right: 20, }}/>
      <YAxis dataKey="price" />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="price" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
