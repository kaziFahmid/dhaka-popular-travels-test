import React, { memo } from "react";

const FlightOptions = () => {
  return (
<div  className="py-6 container max-w-[1280px] mx-auto border-b border-blue-800">
<div className="w-60 mx-auto rounded-none  flex justify-center items-center">
      <div className="border border-blue-800 5 px-5 text-sm text-nowrap py-0.5 font-semibold">
        Round Trip
      </div>
      <div className="border border-blue-800 5 bg-blue-800 text-white px-5 text-sm text-nowrap   py-0.5 font-semibold">
        One way
      </div>
      <div className="border border-blue-800 5 px-5 text-sm text-nowrap  py-0.5 font-semibold">
        Multi city
      </div>
    </div>
</div>
  );
};

export default memo(FlightOptions);
