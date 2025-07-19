import React from "react";

const VehiclePanel = (props) => {
  return (
    <>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

      <div
        className="flex border-2 border-gray-100 active:border-black
          rounded-xl w-full items-center justify-between mb-2 p-3 bg-white"
      >
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg
"
          alt="Uber Moto"
        />

        <div className="ml-4 flex-1">
          <h4 className="font-medium text-base">
            OrbixGo{" "}
            <span>
              <i className="ri-user-3-fill"></i> 4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>

        <h2 className="text-lg font-medium">₹193.20</h2>
      </div>

      <div className="flex border-2 border-gray-100 active:border-black  rounded-xl w-full items-center justify-between mb-2 p-3 bg-white">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="Uber Moto"
        />

        <div className="ml-7 flex-1">
          <h4 className="font-medium text-base">
            OrbixMoto{" "}
            <span>
              <i className="ri-user-3-fill"></i> 1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Motor Cycle rides
          </p>
        </div>

        <h2 className="text-lg font-medium">₹65.17</h2>
      </div>

      <div className="flex border-2 border-gray-100 active:border-black rounded-xl w-full items-center justify-between mb-2 p-3 bg-white">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="Uber Moto"
        />

        <div className="ml-7 flex-1">
          <h4 className="font-medium text-base">
            OrbixAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i> 3
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto rides
          </p>
        </div>

        <h2 className="text-lg font-medium">₹118.86</h2>
      </div>
    </>
  );
};

export default VehiclePanel;
