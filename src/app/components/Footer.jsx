"use client";
import React from "react";
function Index() {
  return (
    <div className="pt-20">
      <div className="w-full border-gray-300 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto">
        <div className="container mx-auto py-12">
          <div className="xl:flex lg:flex md:flex pt-6">
            <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
              <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                <a href="#" className="ml-3 font-bold text-xl">
                  ExpenseFlow
                </a>
              </div>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">
                  Community
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a>About Us</a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a>Blog</a>
                </li>
              </ul>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">
                  Getting Started
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a>About Us</a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a>How to start a blog</a>
                </li>
              </ul>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">
                  Resources
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a>Accessibility</a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a>Usability</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
              <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a>Terms of service</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a>Privacy Policy</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a>Security</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a>Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
              <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                <div>
                  <a>
                    <svg
                      aria-label="Twitter"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a>
                    <svg
                      aria-label="Instagram"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a>
                    <svg
                      aria-label="Dribble"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-dribbble"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#718096"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                      <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4" />
                      <path d="M3.1 10.75c5 0 9.814-.38 15.314-5" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Maicol-19ty">
                    <svg
                      aria-label="Github"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="mb-10 text-gray-800 text-base">
          © 2024{" "}
          <a href="#" className="font-bold">
            ExpenseFlow
          </a>
          . All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Index;
