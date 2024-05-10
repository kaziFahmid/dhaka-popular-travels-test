import React from "react";
import Button from "../Button/Button";

const FlightTable = ({ flights }) => {
  return (
    <>
      <div className="overflow-x-auto rounded-md mt-5">
        <table className="table table-md ">
          <thead className="bg-base-300 ">
            <tr>
              <th className="text-center">FLIGHT</th>
              <th className="text-center">AIRCRAFT</th>
              <th className="text-center">CLASS</th>
              <th className="text-center">FARE</th>
              <th className="text-center">ROUTE</th>
              <th className="text-center">DEPARTURE</th>
              <th className="text-center">ARRIVAL</th>
              <th className="text-center"></th>
              <th className="text-end">DURATION</th>
              <th className="text-center">PRICE</th>
            </tr>
          </thead>
          <div></div>
          <tbody>
            {flights?.flightOffer?.map((data, index) => (
              <tr
                className={`border-b border-red-500  ${
                  index % 2 === 0 ? "bg-base-200" : "bg-base-300"
                } `}
              >
                <td>
                  {data?.itineraries?.map((itinerary, itineraryIndex) => (
                    <div key={itineraryIndex}>
                      {itinerary?.segments?.map((segment, segmentIndex) => (
                        <div key={segmentIndex}>
                          <h6 className="text-gray-500">
                            {segment?.marketingCarrier} {segment?.aircraft}
                          </h6>
                        </div>
                      ))}
                    </div>
                  ))}
                </td>
                <td className="relative">
                  {data?.itineraries?.map((itinerary, itineraryIndex) => (
                    <div key={itineraryIndex}>
                      {itinerary?.segments?.map((segment, segmentIndex) => (
                        <div key={segmentIndex}>
                          <h6 className="text-gray-500">
                            {segment?.flightNumber}
                          </h6>
                        </div>
                      ))}
                    </div>
                  ))}
                </td>
                <td className="relative">
                  <div>
                    {data?.class.flat()?.map((cls, classIndex) => (
                      <div key={classIndex}>
                        <div>
                          <h6 className="text-gray-500">{cls}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="relative">
                  <div>
                    {data?.fareBasis
                      .flat()
                      ?.map((farebasis, farebasisIndex) => (
                        <div key={farebasisIndex}>
                          <div>
                            <h6 className="text-gray-500"> {farebasis}</h6>
                          </div>
                        </div>
                      ))}
                  </div>
                </td>
                <td>
                  <div>
                    {data?.itineraries?.map((itinerary, itineraryIndex) => (
                      <div key={itineraryIndex}>
                        {itinerary?.segments?.map((segment, segmentIndex) => (
                          <div key={segmentIndex}>
                            <h6 className="text-gray-500">
                              {segment?.departure?.iataCode}-
                              {segment?.arrival?.iataCode}
                            </h6>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <div>
                    {data?.itineraries?.map((itinerary, itineraryIndex) => (
                      <div key={itineraryIndex}>
                        {itinerary?.segments?.map((segment, segmentIndex) => (
                          <div key={segmentIndex}>
                            <h6 className="text-gray-500">
                              {segment?.departure?.at}
                            </h6>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <div className=" ">
                    {data?.itineraries?.map((itinerary, itineraryIndex) => (
                      <div key={itineraryIndex}>
                        {itinerary?.segments?.map((segment, segmentIndex) => (
                          <div key={segmentIndex}>
                            <h6 className="text-gray-500">
                              {segment?.arrival?.at}
                            </h6>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <div>
                    <div>----</div>
                    <div>----</div>
                  </div>
                </td>
                <td>
                  <div>
                    {data?.itineraries?.map((itinerary, itineraryIndex) => (
                      <div className="text-end" key={itineraryIndex}>
                        <h6 className="text-gray-500">{itinerary?.duration}</h6>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="text-center ">
                  <h6 className="text-gray-500"> {data?.price}</h6>

                  <Button text={'SELECT'}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FlightTable;
