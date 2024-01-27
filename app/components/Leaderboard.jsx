import React from "react";
import { Progress } from "antd";

export const Leaderboard = ({ title, amount, rate, color, percent }) => {
  return (
    <div className="bg-white p-2 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-2xl">
      <h1 className="text-[#26282c] font-semibold text-lg ">{title}</h1>
      <Progress
        percent={percent}
        status="active"
        showInfo={false}
        strokeColor={color}
        strokeWidth={12}
      />
      <div className="flex flex-row items-center justify-between">
        <p>{amount}</p>
        <p>{rate}</p>
      </div>
    </div>
  );
};
