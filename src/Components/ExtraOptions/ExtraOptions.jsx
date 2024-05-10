import React from "react";
import Button from "../Button/Button";

const ExtraOptions = ({setIsShowFlightDatas}) => {
    let handleSearch=()=>{
        setIsShowFlightDatas((prev)=>!prev)
    }
  return (
    <div className="container max-w-[1280px] mx-auto border-b border-blue-800 flex justify-between items-center py-3">
      <div className="flex justify-start place-items-center gap-2">
        <div>
          <input type="checkbox" />
        </div>
        <h6 className="font-semibold">Extra Options</h6>
      </div>

      <div className="flex justify-center items-center gap-5">
        <h6>Environment</h6>
        <div className="flex justify-start place-items-center  gap-2">
          {" "}
          <div>
            <input type="radio" />
          </div>
          <h6 className="font-semibold">Dummy</h6>
        </div>
        <div className="flex justify-start place-items-center  gap-2">
          {" "}
          <div>
            <input type="radio" />
          </div>
          <h6 className="font-semibold">PDT</h6>
        </div>
      </div>

      <div>
        <Button functions={handleSearch} text={'SEARCH'}/>
      </div>
    </div>
  );
};

export default ExtraOptions;
