import React, { useEffect,useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
// import discord from "../../acets/discord.png";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Review from "../Slider/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DataHome from "../../CourseData/DataHome";


const Home = () => { 
  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    
  }, []);




  return (
    <>
      <div className=" flex flex-wrap mt-12 text-center flex-grow flex-col w-[100%] h-[60vh] top-14">
        <div
          className="w-[700px] pt-[6%] flex flex-col border-0 border-black h-full"
          data-aos="fade-right"
        >
          <h1 className="text-[50px] font-serif  mb-7">
            Welcome to the Future of
            <span className="text-sky-400">
              <Typewriter
                options={{
                  strings: ["Programing", "Learning", "Development","Skill Enhancement"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div className="flex flex-none ml-5">
            <div className=" p-4 text-[24px] font-sans ">
              Start Learning by best creators for{" "}
              <span className="text-sky-400">Absolutely Free</span>
            </div>
          </div>
           <Link to='/course'
            type="button"
            className="text-white ml-9 w-[160px] bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 text-[15px]"
          >
            Start Learning
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link> 
        </div>
        {/* ###############################__________________----------------------------------------------------- */}
        <div className="h-full border-0 border-red-500 w-[500px]">
          <img
            className="w-[80%] h-[80%]  relative anima-bounce top-14 left-14 "
            src="https://files.codingninjas.in/438375-17407.webp"
            alt=""
          />
        </div>
      </div>
      {/* ######################################################## */}
      <div
        className="items-center w-[100%] h-[50px] flex flex-row justify-center mt-11 mb-11"
      >
        <div className="scroll-indicator" data-aos="fade-down">  </div>
      </div>
      {/* ######################################################## */}
      <div
        className=" flex flex-row items-center justify-evenly mt-14"
        data-aos="fade-up"
      >

        {
          DataHome.map((item) => {
            return (
              <div className="flex flex-col text-center ">
                <div className="text-3xl text-[#00b8ff]">
                  {item.count}
                </div>
                <div className="text-2xl text-gray-700"> {item.type} </div>
              </div>
            )
          })
        }
      </div>


      <br />
      {/* ################### */}
      <div className="flex h-[400px] justify-around mt-8 flex-wrap">
        <div className="flex items-center justify-center h-full w-[550px] border-0 border-black">
          <div className="relative block w-full group">
            <img className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 rounded-lg"
              src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?size=626&ext=jpg&uid=R81020285&ga=GA1.2.1343247410.1691353414&semt=ais" alt="" />
            <div className="relative p-5">
              <div className="mt-40">
                {/* Hidden content */}
                <div className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0">
                  <div className="p-2">
                    <p className="text-lg text-white">
                      
                    </p>
                    <Link to='/course'>    <button
                      type="button"
                      className="text-white ml-9 w-[160px] bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 text-[15px]"
                    >
                      Start Learning
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button> </Link>
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </div>
        </div>

        {/* 2nd part */}

        <div className="flex items-center justify-center h-full w-[550px] border-0 border-black">
          <div className="relative block w-full group">
            <img className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 rounded-lg"
              src="https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?size=626&ext=jpg&uid=R81020285&ga=GA1.2.1343247410.1691353414&semt=sph" alt="" />
            <div className="relative p-5">
              <div className="mt-40">
                {/* Hidden content */}
                <div className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0">
                  <div className="p-2">
                    <p className="text-lg text-white">
                      
                    </p>
                    <Link to='/creater'>   <button 
                      type="button"
                      className="text-white ml-9 w-[160px] bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 text-[15px]"
                    >
                      Educator
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    </Link>
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </div>
        </div>

      </div>

      <section className="w-auto py-6 h-auto mt-8 ">
        <Review />
      </section>

      {/* Top creaters company section  */}
      <div className="text-[#75bbf8] text-4xl text-center mt-10">
        {" "}
        Our Top Educators From
      </div>
      <div className="w-full mt-28">
        <div className="h-[100px]  overflow-hidden relative w-auto">
          <ul className="flex justify-evenly h-[100%] w-[calc(250px*14)] animate-scroll">
            <li className="w-[200px] h-[70px] ">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt=""
              />
            </li>
            <li className="w-[200px] h-[70px] ">
              <img
                className="w-full h-full"
                src="https://www.interviewbit.com/blog/wp-content/uploads/2021/07/Amazon-logo-1024x430.png"
                alt=""
              />
            </li>
            <li className="w-[200px] h-[70px] ">
              <img
                className="w-full h-full"
                src="https://www.interviewbit.com/blog/wp-content/uploads/2021/07/Uber-Logo-1024x356.png"
                alt=""
              />
            </li>
            <li className="w-[200px] h-[70px] ">
              <img
                className="w-full h-full"
                src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
                alt=""
              />
            </li>
            <li className="w-[200px] h-[70px] ">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt=""
              />
            </li>
            <li className="w-[200px] h-[70px] ">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt=""
              />
            </li>
            <li className="w-[200px] h-[70px] ">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt=""
              />
            </li>
            <li className="w-[200px] h-[70px] ">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="w-auto h-auto mt-8 mb-5 bg-[#353A42] border-0 border-red-400 flex flex-wrap justify-items-center">
        <div className=" h-[70vh] w-[600px] flex flex-col justify-center">
          <img className="w-full h-[40%] align-middle" src="" alt="" />
        </div>
        <div className="text-[16px] h-[70vh] w-[700px] border-0 border-black flex justify-center flex-col">
          <h1 className="text-[42px] text-white  font-serif font-bold">
            Join our community on{" "}
            <FontAwesomeIcon icon={faDiscord} color="skyblue" />
          </h1>
          <p className="text-[24px] text-white w-[80%] ml-auto mr-auto">
            Come together and make a difference!Connect and grow with our
            Discord community!Join our community for an interactive learning
            experience!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
