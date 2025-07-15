import React, { useContext, useState } from "react";
import logo from "../assets/logo_captain.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const [user, setUser] = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      navigate("/login");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="py-5 px-7 h-screen flex flex-col justify-between">
      <div>
        <img src={logo} className="w-23 mb-10" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">
            What's our Captain's name
          </h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 text-lg placeholder:text-base w-1/2"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 text-lg placeholder:text-base w-1/2"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What's our Captain's email
          </h3>

          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-8 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Sign Up
          </button>
        </form>

        <p className="text-center">
          {" "}
          Already have a account?{" "}
          <Link to="/user-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[14px] leading-tight text-gray-400">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="underline text-black"> Privacy Policy</span> and{" "}
          <span className="underline text-black"> Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
