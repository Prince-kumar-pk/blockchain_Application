import React, { useContext,useState,useEffect} from "react";
import "./Course.css";
// import Data from '../../CourseData/CourseData'
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextApi";
import { custom_greeting_backend } from "../../../../declarations/custom_greeting_backend/index";
export default function Course() {
  // const Data = useContext(Context);

  const [Arr,setArr] = useState([]);
  const array = [];
  useEffect(() => {
    const myfun = async()=>{
      const result = await custom_greeting_backend.getAll();
      console.log(result);
      setArr(result);
     }
     myfun();
  }, []);

  // console.log(Arr);


  return (
    <div>
      <Slider />
      <div className="wraper">
        {Arr.map((item,index) => {
          console.log(item[1].insName);
          return (
            <div className="container">
              <Link to={`/video/${item[0]}`}>
                <div className="card">
                  <div className="card-header">
                    <img src={item[1].courseImg} alt="rover" />
                  </div>
                  <div className="card-body">
                    <span className="tag tag-teal">{item[1].tagName}</span>
                    <div className="mt-4"> {item[1].disc} </div>
                    {/* <div className= "mt-8" > Date: { item[1].date}  &  Duration: {item[1].duration}</div> */}
                    <div className="user">
                      <img src={item[1].profile} alt="user" />
                      <div className="user-info">
                        <h5>{item[1].insName}</h5>
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
    </div>
  );
}
