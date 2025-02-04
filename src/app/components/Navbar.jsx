"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function Navbar() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  return (
    <div className="bg-white h-full w-full dark:bg-gray-900">
      {/* Code block starts */}
      <nav className="bg-white shadow xl:block hidden">
        <div className="mx-auto container px-6 py-2 xl:py-0">
          <div className="flex items-center justify-between">
            <div className="inset-y-0 left-0 flex items-center xl:hidden">
              <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                <div className="visible xl:hidden">
                  <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                    <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-grid"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x={4} y={4} width={6} height={6} rx={1} />
                          <rect x={14} y={4} width={6} height={6} rx={1} />
                          <rect x={4} y={14} width={6} height={6} rx={1} />
                          <rect x={14} y={14} width={6} height={6} rx={1} />
                        </svg>
                        <span className="ml-2 font-bold">Dashboard</span>
                      </div>
                    </li>
                    <li className="xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-puzzle"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                        </svg>
                        <span className="ml-2 font-bold">About Us</span>
                      </div>
                    </li>
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                          <Image
                            className="rounded h-10 w-10 object-cover"
                            src="/icons8-avatar.gif"
                            alt="logo"
                            width="72"
                            height="72"
                            unoptimized
                          />
                        </div>
                        <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                        <div className="sm:ml-2 text-white relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </li>
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={7} r={4} />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        <span className="ml-2">Profile</span>
                      </div>
                    </li>
                  </ul>
                  <svg
                    onClick="MenuHandler(this,true)"
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="show-m-menu icon icon-tabler icon-tabler-menu"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                </div>
                <div
                  className="hidden close-m-menu text-gray-700"
                  onClick="MenuHandler(this,false)"
                >
                  <svg
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="relative flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap relative z-10">
                ExpenseFlow
              </span>
              <div className="absolute left-[-18%] bottom-[-2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-[120%] blur-[1px] z-0" />
              <div className="absolute left-[-18%] bottom-[-2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-[120%] z-0" />
              <div className="absolute left-[8%] bottom-[-2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-[70%] blur-[1px] z-0" />
              <div className="absolute left-[8%] bottom-[-2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-[70%] z-0" />
            </a>
            <div className="flex">
              <div className="hidden xl:flex md:mr-6 xl:mr-16">
                <a className="cursor-pointer flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-grid"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={4} width={6} height={6} rx={1} />
                      <rect x={14} y={4} width={6} height={6} rx={1} />
                      <rect x={4} y={14} width={6} height={6} rx={1} />
                      <rect x={14} y={14} width={6} height={6} rx={1} />
                    </svg>
                  </span>
                  Dashboard
                </a>
                <a className="cursor-pointer flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                  </span>
                  About Us
                </a>
              </div>
              <div className="hidden xl:flex items-center">
                <div className="relative md:mr-6 my-2">
                  <button className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">
                    Manage
                  </button>
                </div>
                <div className="ml-6 relative">
                  <div
                    className="flex items-center relative"
                    onClick={() => setProfile(!profile)}
                  >
                    {profile && (
                      <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 ">
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-user"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={12} cy={7} r={4} />
                              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <span className="ml-2">My Profile</span>
                          </div>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-help"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={17} x2={12} y2="17.01" />
                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                          </svg>
                          <span className="ml-2">Help Center</span>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-settings"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <circle cx={12} cy={12} r={3} />
                          </svg>
                          <span className="ml-2">Account Settings</span>
                        </li>
                      </ul>
                    )}
                    <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                      <Image
                        className="rounded-full h-10 w-10 object-cover"
                        src="/icons8-avatar.gif"
                        alt="logo"
                        width="80"
                        height="80"
                        unoptimized
                      />
                    </div>
                    <div className="ml-2 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
          <div className="">
            <a
              href="#"
              className="relative flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap relative z-5">
                ExpenseFlow
              </span>
              <div className="absolute left-[-18%] bottom-[-2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-[120%] blur-[1px] z-0" />
              <div className="absolute left-[-18%] bottom-[-2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-[120%] z-0" />
              <div className="absolute left-[8%] bottom-[-2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-[70%] blur-[1px] z-0" />
              <div className="absolute left-[8%] bottom-[-2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-[70%] z-0" />
            </a>
          </div>
          <div className="flex items-center">
            <div className="relative mr-6 ">
              <button className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">
                Manage
              </button>
            </div>
            <div
              id="menu"
              className="text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? (
                ""
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? "w-full xl:hidden h-full absolute z-40 transform translate-x-0"
              : "   w-full xl:hidden h-full absolute z-40 transform -translate-x-full"
          }
        >
          <div
            className="bg-gray-800 opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
            <div className="px-6 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="relative flex items-center space-x-3 rtl:space-x-reverse"
                        >
                          <span className="self-center text-2xl font-semibold whitespace-nowrap relative z-10">
                            ExpenseFlow
                          </span>
                          <div className="absolute left-[-18%] bottom-[-2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-[120%] blur-[1px] z-0" />
                          <div className="absolute left-[-18%] bottom-[-2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-[120%] z-0" />
                          <div className="absolute left-[8%] bottom-[-2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-[70%] blur-[1px] z-0" />
                          <div className="absolute left-[8%] bottom-[-2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-[70%] z-0" />
                        </a>
                      </div>
                      <div
                        id="cross"
                        className="text-gray-800"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className="f-m-m">
                    <a className="cursor-pointer">
                      <li className="text-gray-800 pt-10">
                        <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-grid"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <rect x={4} y={4} width={6} height={6} rx={1} />
                              <rect x={14} y={4} width={6} height={6} rx={1} />
                              <rect x={4} y={14} width={6} height={6} rx={1} />
                              <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                          </div>
                          <p className="text-indigo-700 xl:text-base text-base ml-3">
                            Dashboard
                          </p>
                        </div>
                      </li>
                    </a>
                    <a className="cursor-pointer">
                      <li className="text-gray-800 pt-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-puzzle"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                              About Us
                            </p>
                          </div>
                        </div>
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="w-full pt-4">
                  <div className="flex justify-center mb-4 w-full">
                    <div className="relative w-full">
                      <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4"></div>
                    </div>
                  </div>
                  <div className="border-t border-gray-300">
                    <div className="w-full flex items-center justify-between pt-1">
                      <div className="flex items-center">
                        <Image
                          alt="profile-pic"
                          src="/icons8-avatar.gif"
                          className="w-8 h-8 rounded-md"
                          width="72"
                          height="72"
                          unoptimized
                        />
                        <p className=" text-gray-800 text-base leading-4 ml-2">
                          Jane Doe
                        </p>
                      </div>
                      <ul className="flex">
                        <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                          <div className="w-6 h-6 md:w-8 md:h-8">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-bell"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Code block ends */}
    </div>
  );
}
