import React, { useRef, useState } from "react";
import logo from "../assets/react.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

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
        opacity: 1,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 1,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [paneleOpen]);

  return (
    <div className="h-screen relative">
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
            <div className="line absolute h-16 w-1 top-[35%] left-10 bg-gray-900 rounded-full"></div>
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
        <div ref={panelRef} className="h-0 opacity-0 bg-red-500 "></div>
      </div>
    </div>
  );
};

export default Home;
