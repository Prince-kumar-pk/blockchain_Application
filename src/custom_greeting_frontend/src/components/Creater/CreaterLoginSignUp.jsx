import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
// import loginpic from '../../acets/login profile.gif'
// import loginImage from '../../acets/loginImage.png'

const CreaterLoginSignUp = ({ islogin }) => {
  const [registration, setRegistration] = useState(false);

  const [userId, setUserId] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const createPost = async () => {
    try {
      const result = await axios.post(
        "http://52.62.174.52:3000/courses/registerUser",
        {
          userId,
          email,
          profileLink,
          pass,
        }
      );
      console.log(result);
      alert("Done");

      setUserId("");
      setProfileLink("");
      setEmail("");
      setPass("");
    } catch (e) {
      alert(e);
    }
  };

  const handleonclickregister = (e) => {
    e.preventDefault();
    createPost();
  };

  const createPostLogin = async () => {
    try {
      const result = await axios.post(
        "http://52.62.174.52:3000/courses/loginUser",
        {
          email,
          pass,
        }
      );

      console.log(result);
      alert("Login Successfuly ✅");
      islogin(true);
    } catch (e) {
      console.log(e);
      alert("Login Detail Not Found");
    }
  };

  const handleonclicklogin = (e) => {
    e.preventDefault();
    createPostLogin();
  };

  if (registration) {
    return (
      <div className="background_cus">
        <div className="flex flex-col justify-center align-middle  w-[400px] h-[70vh] rounded-2xl ml-auto mr-auto my-[14vh] bg-sky-100 p-8 drop-shadow-lg">
          <h1 className="text-5xl text-black text-center ">Register</h1>
          <form className=" ml-auto mr-auto mt-10 w-full h-full ">
            <input
              type="text"
              name="user"
              id="user"
              className="p-3 w-full mt-2 rounded-md"
              placeholder="Name"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />{" "}
            <br />
            <input
              type="text"
              name="profile"
              id="profile"
              className="p-3 w-full mt-2 rounded-md"
              placeholder="profile link"
              value={profileLink}
              onChange={(e) => {
                setProfileLink(e.target.value);
              }}
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="p-3 w-full mt-2 rounded-md"
              placeholder="Email id"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
            <br />
            <input
              type="password"
              name="pass"
              id="pass"
              className="p-3 w-full mt-2 rounded-md"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />{" "}
            <br />
            <button
              type="submit"
              className="p-2 border-2 w-28 mt-6 ml-5 align-middle rounded-lg bg-sky-200 hover:drop-shadow-md"
              onClick={handleonclickregister}
            >
              Register
            </button>
            <span
              className="text-1xl align-middle ml-5 hover:cursor-pointer hover:underline"
              onClick={() => {
                setRegistration(false);
              }}
            >
              Already Rigestered ?
            </span>
          </form>
        </div>
      </div>
    );
  } else
    return (
      <div className="background_cus flex flex-row justify-center flex-wrap sm:flex-wrap-reverse">
        <div className="flex flex-col justify-center align-middle  w-[400px] h-[60vh] rounded-2xl ml-[10%]
        border-2 border-sky-200 mr-auto my-[18vh] bg-sky-100 p-5 drop-shadow-2xl">
          <h1 className="text-5xl text-black text-center ">Login</h1>
          <img className="border-0 border-black w-[90px] h-[150px] rounded-full ml-auto mr-auto mt-4" src=  "" alt="Login Profile"/>
          <form className=" ml-auto mr-auto mt-6 w-full h-full  ">
            <input
              type="text"
              name="user"
              id="user"
              className="p-3 w-full rounded-md"
              placeholder="User Name - Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
            <br />
            <input
              type="password"
              name="pass"
              id="pass"
              className="p-3 w-full mt-2 rounded-md"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />{" "}
            <br />
            <button
              type="submit"
              className="p-2 border-2 w-28 mt-6  align-middle rounded-lg hover:drop-shadow-md
             bg-sky-200"
              onClick={handleonclicklogin}
            >
              Login
            </button>
            <button
              type="submit"
              className="p-2 border-2 w-28 mt-6 ml-5 align-middle rounded-lg bg-sky-200 hover:drop-shadow-md
            "
              onClick={() => {
                setRegistration(true);
              }}
            >
              Register
            </button>
          </form>
        </div>

            <div className=" text-left border-0 border-black mt-20 w-1/2 flex flex-col">
                <h1 className="text-6xl cursive text-center text-sky-700 mt-4">Instructure Login</h1>

                <img className="w-[400px] h-[300px] align-middle text-center ml-auto mr-auto mt-10" src= "" alt="Instructure" />
                <p className="text-center mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, qui.</p>
            </div>

      </div>
    );
};

export default CreaterLoginSignUp;
