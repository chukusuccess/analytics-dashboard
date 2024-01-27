import Image from "next/image";
import React from "react";

export const QuickSummary = ({
  title,
  amount,
  icon,
  iconAlt,
  graph,
  graphAlt,
  plot,
}) => {
  return (
    <div className="w-full sm:w-1/2 sm:max-w-[47.5%] h-[180px] border border-[#edf2f7] bg-white cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-2xl p-5 flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <Image
          src={icon}
          alt={iconAlt}
          width={40}
          height={40}
          priority
          className="cursor-pointer pingg"
        />
        <div className="flex">
          <Image
            src={graph}
            alt={graphAlt}
            width={104}
            height={32}
            priority
            className="cursor-pointer sm:flex md:hidden flex"
          />
          <Image
            src={graph}
            alt={graphAlt}
            width={104}
            height={32}
            priority
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-row gap-5 sm:gap-0 items-center sm:items-start sm:flex-col">
        <p className="text-[#898989] font-medium text-lg ">{title}</p>
        <h1 className=" text-[#3A3F51] font-semibold text-2xl ">{amount}</h1>
      </div>
      <div className="text-[#606060] text-sm flex items-center gap-2 ">
        <Image
          src={plot}
          alt="plot"
          width={70}
          height={24}
          priority
          className="cursor-pointer pingg"
        />{" "}
        vs. last month
      </div>
    </div>
  );
};
