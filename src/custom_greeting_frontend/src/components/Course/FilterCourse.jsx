import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import TagsData from "../../CourseData/CourseData";

// import banner3 from "../../acets/prince1.gif";
import { Context } from "../context/ContextApi";
const FilterCourse = () => {
  const Data = useContext(Context);
  const [tag, setTag] = useState("Programing");

  console.log(tag);

  const Infodata = Data.filter((it, x) => {
    return it.tagName === `${tag}`;
  }).map((item) => {
    return item;
  });

  return (
    <>
      <div className="border-0 border-black w-[100%] h-[70vh]  backgroundimg drop-shadow-lg">
        <img src={banner3} alt="" />
      </div>

      {/* <div className="text-3xl text-center">Hello! World</div> */}
      <section className="flex flex-col  w-[100%] h-auto mt-18">
        <div className="buttons flex flex-row justify-center w-[100%] h-auto  bg-gray ">

        {TagsData.map((item)=>{
          return (
            <button
            className="w-[200px] h-[35px] rounded-tl-full rounded-br-full text-[18px] bg-blue-400 text-white m-4 hover:bg-blue-200 hover:text-black shadow-lg hover:shadow-md"
            value= {item.tags}
            onClick={(e) => {
              setTag(e.target.value);
            }}
          >
            {item.tags}
          </button>
          )
        })}
        </div>
      </section>


      <div className="wraper">
        {Infodata?.map((item) => {
          return (
            <div className="container">
              <Link to={`/video/${item?._id}`}>
                <div className="card">
                  <div className="card-header">
                    <img src={item.courseImg} alt="rover" />
                  </div>
                  <div className="card-body">
                    <span className="tag tag-teal">{item.tagName}</span>
                    <div className="mt-4"> {item.discription} </div>
                    {/* <div className= "mt-8" > Date: { item.date}  &  Duration: {item.duration}</div> */}
                    <div className="user">
                      <img src={item.profile} alt="user" />
                      <div className="user-info">
                        <h5>{item.insname}</h5>
                        <small>Instructor</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterCourse;
