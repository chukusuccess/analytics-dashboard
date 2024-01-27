"use client";

import { Select } from "antd";

import { SalesTrendsCard } from "./components/SalesTrendsCard";
import { RecentOrdersCard } from "./components/RecentOrdersCard";
import { QuickSummary } from "./components/QuickSummary";
import { Leaderboard } from "./components/Leaderboard";

const items = [
  {
    label: "Weekly",
    key: "0",
  },
  {
    label: "Monthly",
    key: "1",
  },
  {
    label: "Yearly",
    key: "2",
  },
];

const quickSummaryData = [
  {
    title: "Total Order",
    amount: 350,
    icon: "/totalorder.svg",
    iconAlt: "total orders",
    graph: "/greengraph.svg",
    graphAlt: "total order graph",
    plot: "/up.svg",
  },
  {
    title: "Total Refund",
    amount: 270,
    icon: "/totalrefund.svg",
    iconAlt: "total refunds",
    graph: "/redgraph.svg",
    graphAlt: "total refunds graph",
    plot: "/down.svg",
  },
  {
    title: "Average Sales",
    amount: 1567,
    icon: "/averagesales.svg",
    iconAlt: "average sales",
    graph: "/redgraph.svg",
    graphAlt: "average sales graph",
    plot: "/down.svg",
  },
  {
    title: "Total Income",
    amount: "$350,000",
    icon: "/totalincome.svg",
    iconAlt: "total income",
    graph: "/greengraph.svg",
    graphAlt: "total income graph",
    plot: "/up.svg",
  },
];

const leaderBoardData = [
  {
    title: "Book Bazaar",
    amount: "$2,500,000",
    rate: "+15%",
    color: "#6160DC",
    percent: 55,
  },
  {
    title: "Artisan Isle",
    amount: "$1,800,000",
    rate: "+10%",
    color: "#54c5eb",
    percent: 45,
  },
  {
    title: "Toy Troop",
    amount: "$1,200,000",
    rate: "+8%",
    color: "#FFB74A",
    percent: 25,
  },
  {
    title: "XStore",
    amount: "$1,200,000",
    rate: "+15%",
    color: "#FF4A55",
    percent: 25,
  },
];

export default function Home() {
  return (
    <main className="flex w-full min-h-fit overflow-auto flex-col items-start justify-start gap-5">
      <div className="w-full flex md:flex-row sm:flex-col flex-col gap-5">
        <div className="w-full md:w-3/5">
          <div className="w-full h-[374px] overflow-x-auto overflow-y-hidden border border-[#edf2f7] bg-white rounded-2xl p-5 flex flex-col gap-y-2 relative">
            <div className="flex items-center justify-between gap-5 absolute sm:gap-0 sm:static ">
              <h1 className="text-[#26282c] font-semibold text-lg ">
                Sales Trends
              </h1>
              <span className="cursor-pointer text-[#3A3F51] font-medium text-sm ">
                <span className="hidden sm:flex">Sort by: </span>
                <Select
                  defaultValue="monthly"
                  style={{
                    width: 100,
                  }}
                  options={[
                    {
                      value: "weekly",
                      label: "Weekly",
                    },
                    {
                      value: "monthly",
                      label: "Monthly",
                    },
                    {
                      value: "yearly",
                      label: "Yearly",
                    },
                  ]}
                />
                {/* <select
                  defaultValue={"weekly"}
                  className="px-2 py-1 border border-[#e9e9e9] rounded-full hover:bg-slate-100 duration-300 transition-all ease-in-out cursor-pointer"
                >
                  <option className="mt-1 p-1" value={"weekly"}>
                    Weekly
                  </option>
                  <option className="mt-1 p-1" value={"monthly"}>
                    Monthly
                  </option>
                </select> */}
              </span>
            </div>
            <SalesTrendsCard />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap w-full md:w-2/5 gap-5">
          {quickSummaryData.map((item, index) => {
            return (
              <QuickSummary
                key={index}
                title={item.title}
                amount={item.amount}
                icon={item.icon}
                iconAlt={item.iconAlt}
                graph={item.graph}
                graphAlt={item.graphAlt}
                plot={item.plot}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col-reverse sm:flex-col-reverse md:flex-row gap-5">
        <div className="w-full md:w-3/5">
          <div className="w-full min-h-fit max-h-[422px] overflow-x-auto noscrollbar overflow-y-hidden border border-[#edf2f7] bg-white rounded-2xl p-5 flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-[#26282c] font-semibold text-lg ">
                Last Orders
              </h1>
              <p className="cursor-pointer text-[#34caa5] font-medium text-lg px-2 py-1 rounded-xl hover:bg-slate-100 duration-300 transition-all ease-in-out">
                See All
              </p>
            </div>
            <RecentOrdersCard />
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <div className="w-full max-w-[98.5%] min-h-fit max-h-[422px] overflow-y-auto noscrollbar border border-[#edf2f7] bg-white rounded-2xl p-5 flex flex-col gap-y-2">
            <div className="flex flex-row items-center justify-between bg-white">
              <h1 className="text-[#26282c] font-semibold text-lg">
                Top Platform
              </h1>
              <p className="cursor-pointer text-[#34caa5] font-medium text-lg px-2 py-1 rounded-xl hover:bg-slate-100 duration-300 transition-all ease-in-out">
                See All
              </p>
            </div>
            {leaderBoardData.map((item, index) => {
              return (
                <Leaderboard
                  title={item.title}
                  amount={item.amount}
                  rate={item.rate}
                  color={item.color}
                  percent={item.percent}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
