import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <section className="cus_svg h-[100vh]  flex flex-col justify-center align-middle ">
        <div
          className="text-7xl cus-sty text-center p-9  text-[#00b8ff]"
          data-aos="fade-down"
        >
          {" "}
          About Us{" "}
        </div>
        <div className="text-2xl text-center cus-sty2">
          <p data-aos="fade-right">
            An online education platform that provides different Programs across
            formal and informal education. King Coder endows students to touch
            their full potential through relevant and pre-evaluated online
            programs delivered in the most engaging learning environment. King
            Coder is driven by commitment, poised to revolutionize the learning
            platform.
          </p>
        </div>
      </section>

      <section className=" h-[40vh]  flex flex-row justify-between align-middle">
        <div className="image rounded-md md:w-[500px]" data-aos="fade-right">
          <img
            className="w-[100%] rounded-3xl h-[100%]"
            src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2019/09/a-64.jpg?fit=800%2C445&ssl=1"
            alt=""
          />
        </div>

        <div
          className="inform w-[800px]  flex flex-col flex-wrap justify-center   align-middle"
          data-aos="fade-right"
        >
          <h1 className="text-4xl mb-5" data-aos="fade-up">
            Vision
          </h1>
          <p className="text-1xl w-[80%] cus-sty2" data-aos="fade-down">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            nesciunt temporibus ex delectus repudiandae dolorum sed tenetur a
            explicabo illo.
          </p>
        </div>
      </section>

      <h1 className="text-[48px] text-center  mt-8 text-sky-400">Founder</h1>
      <hr className="w-60 ml-auto mr-auto" />

      <div
        class="w-auto ml-auto mr-auto mt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sky-800 dark:border-gray-700"
        data-aos="fade-up"
      >
        <div class="flex justify-end px-4 pt-4"></div>
        <div class="flex flex-col items-center pb-10">
          <img
            className="w-60 h-60 mb-3 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/D4D03AQGrVF_qOzCXLw/profile-displayphoto-shrink_400_400/0/1679564203415?e=1699488000&v=beta&t=aBMOt891tdLzEF7lUFgIRXsGtNrjKrTPBiSOB9cci4c"
            alt="Prince"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Prince Kumar
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {" "}
            Full Stack Developer
          </span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <Link
              to="https://www.linkedin.com/in/prince-kumar-61a3001bb/"
              target="_blank"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              LinkedIn
            </Link>
            <a
              href="mailto:princsingh12@gmail.com"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
