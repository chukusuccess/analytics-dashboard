import { Tooltip } from "antd";

export const SalesTrendsCard = () => {
  const graphData = [
    {
      month: "Jan",
      height: "h-[68px]",
      value: "10,000",
    },
    {
      month: "Feb",
      height: "h-[120px]",
      value: "25,000",
    },
    {
      month: "Mar",
      height: "h-[40px]",
      value: "7,500",
    },
    {
      month: "Apr",
      height: "h-[161px]",
      value: "35,000",
    },
    {
      month: "May",
      height: "h-[81px]",
      value: "12,000",
    },
    {
      month: "Jun",
      height: "h-[216px]",
      value: "50,000",
    },
    {
      month: "Jul",
      height: "h-[81px]",
      value: "12,000",
    },
    {
      month: "Aug",
      height: "h-[131px]",
      value: "28,000",
    },
    {
      month: "Sep",
      height: "h-[182px]",
      value: "40,000",
    },
    {
      month: "Oct",
      height: "h-[51px]",
      value: "8,000",
    },
    {
      month: "Nov",
      height: "h-[171px]",
      value: "38,000",
    },
    {
      month: "Dec",
      height: "h-[151px]",
      value: "32,000",
    },
  ];

  return (
    <div className="w-full max-w-[806px] h-[374px] bg-white rounded-2xl p-5 flex flex-row items-center gap-5">
      <div className="flex h-full pt-10 sm:pt-0 sm:mt-0 flex-col gap-5 items-start justify-start font-semibold text-[#525252] text-xs bg-white">
        <p>50,000</p>
        <p>40,000</p>
        <p>30,000</p>
        <p>20,000</p>
        <p>10,000</p>
        <p>5,000</p>
        <p>0</p>
      </div>
      <div className="graphbg min-w-fit max-w-[806px] ml-5 lg:ml-0 w-full overflow-x-auto h-full flex flex-row gap-5 items-end justify-start">
        {graphData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-end items-center gap-2 cursor-pointer"
            >
              <Tooltip title={item.value}>
                <div
                  className={`bg-[#34CAA510] hover:bg-gradient-to-b hover:from-[#34CAA599] hover:to-[#34CAA501] ${item.height} w-[30px] rounded-t-full -bottom-10`}
                ></div>
              </Tooltip>
              <p className="font-semibold text-[#525252] text-xs">
                {item.month}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
