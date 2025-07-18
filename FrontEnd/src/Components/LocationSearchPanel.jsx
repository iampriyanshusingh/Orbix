import React from "react";

const LocationSearchPanel = (props) => {
  //sample array for location
  const locations = [
    "D.60/16 Kumar Electricals, Varanasi",
    "B.44/17 Kapoor Electricals, Varanasi",
    "C.72/14 Agrawal Electricals, Varanasi",
    "E.65/77 Singhania Electricals, Varanasi",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
