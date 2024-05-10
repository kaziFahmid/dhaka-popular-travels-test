import React, { memo } from "react";
import { MdDateRange } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
const FlightForm = () => {
  return (
    <div className="container  max-w-[1280px] mx-auto   ">
      <div className="flex justify-between items-center pe-11 py-3 border-b border-blue-800">
        <div className="flex  border-b border-blue-800justify-start items-center gap-2">
          <input
            type="text"
            placeholder="LHR"
            className="border border-black w-44  p-2   "
          />

          <input
            type="text"
            placeholder="CDG"
            className="border border-black w-44  p-2   "
          />

          <span className="border border-black w-44 p-2 flex items-center justify-between bg-blue-50">
            <span className="font-semibold">22-12-22</span>
            <MdDateRange />
          </span>

          <span className="border border-black w-28 p-2 flex items-center justify-between">
            <span className="font-semibold">Day-</span>
            <RiArrowDropDownLine />
          </span>

          <span className="border border-black w-28 p-2 flex items-center justify-between">
            <span className="font-semibold">Day-</span>
            <RiArrowDropDownLine />
          </span>

          <span className="border border-black w-44 p-2  flex items-center justify-between">
            <span className="font-semibold">Any time</span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="flex justify-start items-stretch  gap-2 text-left">
          <button className="text-xl">+</button>

          <span className="border border-black  w-24 p-2  flex items-center justify-between">
            <span className="font-semibold">ADT</span>
            <RiArrowDropDownLine />
          </span>

          <span className="border border-black  w-24 p-2  flex items-center justify-between">
            <span className="font-semibold">1</span>
            <RiArrowDropDownLine />
          </span>

          <button className="text-xl font-bold">+</button>
        </div>
      </div>
    </div>
  );
};

export default memo(FlightForm);
