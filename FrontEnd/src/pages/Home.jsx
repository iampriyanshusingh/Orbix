import React, { useRef, useState } from "react";
import logo from "../assets/react.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [paneleOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (paneleOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 14,
        opacity: 1,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 1,
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [paneleOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img src={logo} className="w-16 absolute left-5 top-5" />
      <div className="h-screen w-screen ">
        <img
          src="https://imgs.search.brave.com/y02TciJTvNhtmne30EpKraE3hohSDOxmdu50dxgLkhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnViZXItY2RuLmNv/bS9jZG4tY2dpL2lt/YWdlL3dpZHRoPTIx/NjAscXVhbGl0eT04/MCxvbmVycm9yPXJl/ZGlyZWN0LGZvcm1h/dD1hdXRvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA4L0Nh/cmJvbl9NYXBzX0Zp/Z3VyZS0wNi5wbmc"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            onClick={() => {
              setPanelOpen(false);
            }}
            ref={panelCloseRef}
            className="absolute opacity-0 text-2xl top-6 right-6"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            ></input>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            ></input>
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white opacity-0">
          <LocationSearchPanel />
        </div>
      </div>
      <div className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
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
      </div>
    </div>
  );
};

export default Home;
