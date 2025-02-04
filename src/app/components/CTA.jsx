"use client";
import React from "react";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="pt-5 pb-5 bg-gray-100 overflow-y-hidden">
      <div className="mx-auto container py-12 px-4">
        <div className="w-full flex justify-center">
          <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
            <div>
              <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                  <div>
                    <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">
                      Become a member and start building the next big thing
                    </h1>
                  </div>
                  <button className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none">
                    Join the community
                  </button>
                </div>
                <div className="md:w-1/3 w-2/3">
                  <Image
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png"
                    alt="cartoon avatars"
                    width={1085}
                    height={1088}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
