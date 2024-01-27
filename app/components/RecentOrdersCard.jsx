import React from "react";
import Image from "next/image";
import { Table } from "antd";

export const RecentOrdersCard = () => {
  const dataSource = [
    {
      key: "1",
      src: "/marcus.svg",
      name: "Marcus Begson",
      date: "Nov 15, 2023",
      amount: "$80,000",
      status: "paid",
      invoice: "view",
    },
    {
      key: "2",
      src: "/jaydon.svg",
      name: "Jaydon Vaccaro",
      date: "Nov 15, 2023",
      amount: "$150,000",
      status: "refund",
      invoice: "view",
    },
    {
      key: "3",
      src: "/corey.svg",
      name: "Corey Schleifer",
      date: "Nov 14, 2023",
      amount: "$87,000",
      status: "paid",
      invoice: "view",
    },
    {
      key: "4",
      src: "/cooper.svg",
      name: "Cooper Press",
      date: "Nov 14, 2023",
      amount: "$100,000",
      status: "refund",
      invoice: "view",
    },
    {
      key: "5",
      src: "/philip.svg",
      name: "Phillip Lubin",
      date: "Nov 13, 2023",
      amount: "$78,000",
      status: "paid",
      invoice: "view",
    },
  ];

  const columns = [
    {
      width: 200,
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <span className="w-full flex items-center justify-start gap-x-2">
          <Image
            src={record.src}
            alt="user avatar"
            width={40}
            height={40}
            priority
            className="cursor-pointer pingg"
          />
          <p className="font-semibold">{text}</p>
        </span>
      ),
    },
    { width: 120, title: "Date", dataIndex: "date", key: "date" },
    {
      width: 100,
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <p className="font-semibold">{text}</p>,
    },
    {
      width: 100,
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span>
          {text === "paid" ? (
            <p className="text-[#34CAA5]">Paid</p>
          ) : (
            <p className="text-[#ED544E]">Refund</p>
          )}
        </span>
      ),
    },
    {
      width: 100,
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
      render: (text) => (
        <span className="w-full flex items-center justify-start gap-x-2 cursor-pointer">
          <Image
            src="/download.svg"
            alt="document download"
            width={16}
            height={16}
            priority
            className="cursor-pointer spinn"
          />
          <p className="font-semibold">{text}</p>
        </span>
      ),
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      scroll={{
        y: 300,
      }}
      className="noscrollbar"
    />
  );
};
