import React, { useState } from "react";
import Flights from "../../assets/data/LHR_CDG_ADT1_TYPE_1.json";
import Text from "../Text/Text";
import FlightTable from "../FlightTable/FlightTable";
const FlightDatas = ({ isShowFlightDatas }) => {
  const [flights, setFlights] = useState(Flights);

  return (
    <>
      <div className="container  max-w-[1280px] mx-auto   ">
       
        {isShowFlightDatas && <>
          <Text text={flights?.message} />
        <FlightTable flights={flights} />
        
        </>}
      </div>
    </>
  );
};

export default FlightDatas;
