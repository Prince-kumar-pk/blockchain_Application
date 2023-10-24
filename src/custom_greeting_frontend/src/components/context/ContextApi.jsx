import axios from "axios";
import React, { useEffect, useState } from "react";

import { createContext } from "react";
import { custom_greeting_backend } from "../../../../declarations/custom_greeting_backend";
// import { fetchDataFromApi } from "../API/API";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [CourseData, setCourseData] = useState([]);
  // const config = {
  //   headers: {},
  // };

  const getData = async () => {
    // const result = await axios.get(
    //   "http://52.62.174.52:3000/courses/getAllPost",
    //   config
    // );

    custom_greeting_backend.getAll().then(data => setCourseData(data));
    // setCourseData(result);
    
  };

  useEffect(() => {
    // Update the document title using the browser API
    getData();
  }, []);

  return <Context.Provider value={CourseData}>{children}</Context.Provider>;
};
