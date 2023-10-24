import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { custom_greeting_backend } from "../../../../declarations/custom_greeting_backend/index";


// import Data from '../../CourseData/CourseData'

import ReactPlayer from "react-player";
import { Context } from "../context/ContextApi";

const CoursePlayer = () => {
  const Data = useContext(Context);
  const { id } = useParams(); // used to take the parameters  from the url with the help of useParams from react-router-dom.

  console.log(JSON.stringify(id));

  const x = id;
  // const x = JSON.stringify(id).toString();

  const [Info, setInfo] = useState([]);
  const [related, setRelated] = useState([]);
  const [relatedvid, setrelatedvid] = useState("Click here for more Video");
  console.log("id", x);
  // console.log(typeof({id}));



  // const funct = async () => {
  //   const Infor = await Data.filter((it, x) => {
  //     return it._id === `${id}`;
  //   }).map((item) => {
  //     return item;
  //   });
  //   setInfo(Infor);
  // };

  // const funct2 = async () => {
  //   const Infor = await Data.filter((it, x) => {
  //     return it.tagName === `${Info[0]?.tagName}`;
  //   }).map((item) => {
  //     console.log(item);
  //     return item;
  //   });
  //   setRelated(Infor);
  // };
 const [Arr,setArr] = useState([]);
 useEffect(() => {
   const myfun = async()=>{
     const result = await custom_greeting_backend.fetch(id);
    //  console.log(result.videoLink);
     setArr(result);
    }
    myfun();
 }, [id]);


  // useEffect(() => {
  //   funct2();
  // }, [relatedvid]);

  // console.log(Info);
  // console.log(related);

  const relatedData = () => {
    return related.map((e) => {
      return (
        <Link to={`/video/${e._id}`}>
          <div className="flex justify-between shadow-lg rounded-sm  hover:shadow-lg w-full h-20 mt-2">
            <div className="w-30 ">
              <img
                className="w-full h-full rounded-l-md"
                src={e?.courseImg}
                alt=""
              />
            </div>
            <div className="flex w-60 pl-6  flex-col">
              <p>{e.discription}</p>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <>
      <h2 className="text-4xl text-center font-serif  underline ">
        Welcome To the Tutorial
      </h2>
      <hr class="w-[50%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="flex flex-row justify-between w-full border-1 h-[70vh] border-black rounded-lg">
       
            <ReactPlayer
              width="70%"
              height="100%"
              controls={true}
              playing={true}
              url={Arr.videoLink}
            />
         
        {/* second part for the related videos */}

        <div className="w-[25%] flex flex-col h-[100%] rounded-lg border-2 border-gray-300 ">
          <button
            className="text-center h-14 border-2 border-sky-300 bg-sky-200 text-[1.5em] w-auto "
            onClick={() => {
              setrelatedvid("Related Videos");
            }}
          >
            {" "}
            {relatedvid}{" "}
          </button>

          {relatedData()}
        </div>
      </div>
      {/* Lowwer Section  */}
      
          <h1 className=" text-3xl font-serif p-5 w-[70%]">{Arr.disc}</h1>
       
    </>
  );
};

export default CoursePlayer;
