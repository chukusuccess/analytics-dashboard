"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Tooltip, Dropdown } from "antd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Analytics Dashboard",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(false);
  }

  const items = [
    {
      label: (
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <span className="font-semibold">Justin Bergson</span>
          <span className="text-xs text-[#999]">Justin@gmail.com</span>
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="w-full flex items-center justify-start gap-1">
          <Image
            src="/menuitem8.svg"
            alt="dashboard"
            width={30}
            height={30}
            priority
            title="Settings"
            className="cursor-pointer spinn"
          />
          <span>Settings</span>
        </div>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="w-full flex items-center justify-start">
          <Image
            src="/menuitem9.svg"
            alt="dashboard"
            width={30}
            height={30}
            priority
            title="Logout"
            className="cursor-pointer spinn"
          />
          <span className="text-red-500">Logout</span>
        </div>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          className="w-full flex items-center justify-center gap-6"
          onClick={toggleTheme}
        >
          <Image
            src="/lighttheme.svg"
            alt="theme"
            width={27.5}
            height={27.5}
            priority
            title="Theme"
            className="cursor-pointer rotate-90"
          />
          <Image
            src="/darktheme.svg"
            alt="theme"
            width={27.5}
            height={27.5}
            priority
            title="Theme"
            className="cursor-pointer rotate-90"
          />
        </div>
      ),
      key: "4",
    },
  ];

  return (
    <html lang="en">
      <body
        id="body"
        className={`${
          inter.className
        } w-full min-h-fit h-screen flex flex-col items-center justify-center ${
          darkMode === true ? "bg-[#000]" : "bg-[#fff]"
        }`}
      >
        <div
          className={`w-full max-w-[1360px] h-full flex flex-row items-start justify-start ${
            darkMode === true ? "bg-[#1f2937]" : "bg-[#fafafa]"
          }`}
        >
          <nav
            className={`hidden z-30 sm:flex flex-col items-center py-5 gap-3 justify-start h-full w-[80px] ${
              darkMode === true
                ? "bg-[#1f2937] hover:bg-slate-900 border-r-[#6f7174]"
                : "bg-[#fafafa] hover:bg-slate-100 border-r-[#e5eaef]"
            }  transition-all duration-300 border-r  overflow-y-auto fixed`}
          >
            <div className="w-full flex items-center justify-center hover:bg-white mb-2">
              <Image
                src="/mainlogo.svg"
                alt="product Logo"
                width={40}
                height={40}
                priority
                className="cursor-pointer spinn"
              />
            </div>
            <div className="w-full flex items-center justify-center hover:bg-white">
              <Image
                src="/menuitem1.svg"
                alt="dashboard"
                width={80}
                height={40}
                priority
                title="Dashboard"
                className="cursor-pointer"
              />
            </div>
            <div className="w-full flex items-center justify-center hover:bg-white">
              <Image
                src="/menuitem2.svg"
                alt="dashboard"
                width={40}
                height={40}
                priority
                title="Chart"
                className="cursor-pointer spinn"
              />
            </div>
            <div className="w-full flex items-center justify-center hover:bg-white">
              <Image
                src="/menuitem3.svg"
                alt="dashboard"
                width={40}
                height={40}
                priority
                title="Users"
                className="cursor-pointer spinn"
              />
            </div>
            <div className="w-full flex items-center justify-center hover:bg-white">
              <Image
                src="/menuitem4.svg"
                alt="dashboard"
                width={40}
                height={40}
                priority
                title="Groups"
                className="cursor-pointer spinn"
              />
            </div>
            <div className="w-full flex items-center justify-center hover:bg-white">
              <Image
                src="/menuitem5.svg"
                alt="dashboard"
                width={40}
                height={40}
                priority
                title="Summary"
                className="cursor-pointer spinn"
              />
            </div>
            <div className="w-full flex items-center justify-center hover:bg-white">
              <Image
                src="/menuitem6.svg"
                alt="dashboard"
                width={40}
                height={40}
                priority
                title="Report"
                className="cursor-pointer spinn"
              />
            </div>
            <Image
              src="/theme.svg"
              alt="theme"
              width={40}
              height={40}
              onClick={toggleTheme}
              priority
              title="Theme"
              className="cursor-pointer"
            />
            <div className="w-full flex flex-col items-center gap-5">
              <div className="w-full flex items-center justify-center hover:bg-white">
                <Image
                  src="/menuitem7.svg"
                  alt="dashboard"
                  width={40}
                  height={40}
                  priority
                  className="cursor-pointer spinn"
                />
              </div>
              <div className="w-full flex items-center justify-center hover:bg-white">
                <Image
                  src="/menuitem8.svg"
                  alt="dashboard"
                  width={40}
                  height={40}
                  priority
                  title="Settings"
                  className="cursor-pointer spinn"
                />
              </div>
              <div className="w-full flex items-center justify-center hover:bg-white">
                <Image
                  src="/menuitem9.svg"
                  alt="dashboard"
                  width={40}
                  height={40}
                  priority
                  title="Logout"
                  className="cursor-pointer spinn"
                />
              </div>
            </div>
          </nav>
          <div className="max-w-[1360px] w-full h-full">
            <nav
              className={`z-20 max-w-[1360px] pl-5 sm:pl-[100px] w-full h-[88px] ${
                darkMode === true
                  ? "bg-[#1f2937] border-b-[#6f7174] text-[#f5f5f5]"
                  : "bg-[#fafafa] border-b-[#e5eaef] text-[#000]"
              } flex items-center justify-between border-b border-r pr-5  fixed top-0`}
            >
              <h1 className="font-semibold text-xl mr-5 hidden sm:flex">
                Dashboard
              </h1>
              <div className="flex flex-row gap-x-3 sm:gap-x-5 items-center justify-between">
                <div
                  className={`rounded-full border border-[#dadddd] h-[48px] w-1/2 sm:w-[349px] gap-3 sm:gap-5 flex items-center px-3 sm:px-4 bg-white ${
                    darkMode === true ? "bg-slate-900" : "bg-white"
                  } `}
                >
                  <Image
                    src="/Seacrh.svg"
                    alt="Seacrh Logo"
                    width={16}
                    height={16}
                    priority
                    className=""
                  />
                  <input
                    type="search"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Search..."
                    className={`border-0 outline-none w-full ${
                      darkMode === true ? "bg-slate-900" : "bg-white"
                    } `}
                  />
                </div>
                <div className="font-semibold flex items-center justify-between gap-2">
                  <Tooltip title="November 15, 2023" placement="bottom">
                    <Image
                      src="/calendar.svg"
                      alt="calendar Logo"
                      width={20}
                      height={20}
                      priority
                      className={`${darkMode === true ? "invert" : ""} `}
                    />
                  </Tooltip>{" "}
                  <span className="hidden md:flex">November 15, 2023</span>
                </div>
                <Tooltip title="Empty" placement="bottom">
                  <Image
                    src="/notifications.svg"
                    alt="notifications Logo"
                    width={40}
                    height={40}
                    priority
                    className={`cursor-pointer spinn ${
                      darkMode === true ? "invert" : ""
                    } `}
                  />
                </Tooltip>
                <div
                  className={`rounded-3xl border-0 md:border  ${
                    darkMode === true
                      ? "md:border-[#6f7174]"
                      : "md:border-[#dadddd]"
                  }  h-[52px] md:w-[215px] gap-3 flex items-center px-2`}
                >
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                    className="flex sm:hidden"
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Image
                        src="/useravatar.svg"
                        alt="Justin Bergson"
                        width={38}
                        height={38}
                        priority
                      />
                    </a>
                  </Dropdown>
                  <Image
                    src="/useravatar.svg"
                    alt="Justin Bergson"
                    width={38}
                    height={38}
                    priority
                    className="hidden sm:flex"
                  />
                  <span className="md:flex flex-col items-end justify-center text-sm hidden">
                    <p className="text-base">Justin Bergson</p>
                    <p className="text-[#787486]">Justin@gmail.com</p>
                  </span>
                  <Image
                    src="/arrowdown.svg"
                    alt="user profile"
                    width={14}
                    height={8}
                    priority
                    className={`cursor-pointer hidden md:flex ${
                      darkMode === true ? "invert" : ""
                    } `}
                  />
                </div>
              </div>
            </nav>
            <div className="p-5 mt-[88px] ml-0 sm:ml-[80px] pb-24 sm:pb-0">
              {children}
            </div>
          </div>
        </div>
        <nav
          className={`flex z-30 sm:hidden flex-row flex-nowrap items-center px-5 justify-between h-20 noscrollbar fixed bottom-0 w-full min-w-screen bg-[#fafafa] hover:bg-slate-100 transition-all duration-300 border-r  ${
            darkMode === true
              ? "bg-[#1f2937] hover:bg-slate-900 border-r-[#6f7174]"
              : "bg-[#fafafa] hover:bg-slate-100 border-r-[#e5eaef]"
          } overflow-x-auto`}
        >
          <div className="w-full aspect-square flex items-center justify-center hover:bg-white hover:rounded-full">
            <Image
              src="/mobiledashboard.svg"
              alt="dashboard"
              width={40}
              height={40}
              priority
              title="Dashboard"
              className="cursor-pointer"
            />
          </div>
          <div className="w-full aspect-square flex items-center justify-center hover:bg-white hover:rounded-full">
            <Image
              src="/menuitem2.svg"
              alt="dashboard"
              width={40}
              height={40}
              priority
              title="Chart"
              className="cursor-pointer spinn"
            />
          </div>
          <div className="w-full aspect-square flex items-center justify-center hover:bg-white hover:rounded-full">
            <Image
              src="/menuitem3.svg"
              alt="dashboard"
              width={40}
              height={40}
              priority
              title="Users"
              className="cursor-pointer spinn"
            />
          </div>
          <div className="w-full aspect-square flex items-center justify-center hover:bg-white hover:rounded-full">
            <Image
              src="/menuitem4.svg"
              alt="dashboard"
              width={40}
              height={40}
              priority
              title="Groups"
              className="cursor-pointer spinn"
            />
          </div>
          <div className="w-full aspect-square flex items-center justify-center hover:bg-white hover:rounded-full">
            <Image
              src="/menuitem5.svg"
              alt="dashboard"
              width={40}
              height={40}
              priority
              title="Summary"
              className="cursor-pointer spinn"
            />
          </div>
          <div className="w-full aspect-square flex items-center justify-center hover:bg-white hover:rounded-full">
            <Image
              src="/menuitem6.svg"
              alt="dashboard"
              width={40}
              height={40}
              priority
              title="Report"
              className="cursor-pointer spinn"
            />
          </div>
        </nav>
      </body>
    </html>
  );
}
