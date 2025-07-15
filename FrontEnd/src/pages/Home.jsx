import { Link } from "react-router-dom";
import logo from "../assets/react.png";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1538563188159-070c4db2bc65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full">
        <img src={logo} className="w-16 ml-8" />
        <div className="bg-white py-4 px-4">
          <h2 className="text-3xl pb-7 font-bold">Get Started with Orbix</h2>
          <Link
            className="flex items-center justify-center w-full  bg-black text-white py-3 rounded mt-5"
            to="/user-login"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
