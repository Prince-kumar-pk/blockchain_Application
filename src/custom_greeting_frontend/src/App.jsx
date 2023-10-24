// import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as React from "react";
// import Slider from './components/Slider/Slider';
import Course from "./components/Course/Course";
import Layout from "./components/Layout/Layout";
// import Layout from './components/Layout/Layout';
import About from "./components/About/About";
import Creater from "./components/Creater/Creater";
import Home from "./components/Home/Home";
import CoursePlayer from "./components/Course/CoursePlayer";
import FilterCourse from "./components/Course/FilterCourse";
import Article from "./components/Article/Article";
import RoadMap from "./components/RoadMap/RoadMap";
import PopUp from "./components/Creater/PopUp";
import { BrowserRouter } from "../../../node_modules/react-router-dom/dist/index";

function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/creater" element={<Creater />} />
          <Route path="/article" element={<Article />} />
          <Route path="/path" element={<RoadMap/>} />
          <Route path="/coursefilter" element={<FilterCourse />} />
          <Route path="/video/:id" element={<CoursePlayer />} />
        </Route>
        <Route path="/pop" element={<PopUp/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
