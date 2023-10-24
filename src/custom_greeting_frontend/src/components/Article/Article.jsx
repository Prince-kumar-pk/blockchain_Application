import React, { useContext, useState } from "react";
import Data from "../../CourseData/Data";
import "./Article.css";
import { Context } from "../context/ContextApi";

const Article = () => {
  const conData = useContext(Context);
  console.log("Array Data");
  console.log(conData);

  const [selectedSection, setSelectedSection] = useState("react"); // State to track the selected section

  // Function to handle click on navigation items
  const handleNavItemClick = (section) => {
    setSelectedSection(section);
  };

  // Function to render content based on selected section
  const renderContent = () => {
    const sectionData = Data.find((section) => section.id === selectedSection);

    if (sectionData) {
      return (
        <>
          <h1 className="text-4xl ">{sectionData.title}</h1>
          <div className="section-container  justify-center  ml-12 mt-4 ">
            <h2 className="text-2xl underline">{sectionData.title1}</h2>
            <p className="section-content text-[34px] w-[70%] mt-6">
              {sectionData.content}
            </p>
            {/* <br /> */}
            <p className="section-content text-[18px] w-[70%] mt-6">
              {sectionData.content1}
            </p>
            <br />
            <span className="text-2xl">{sectionData.listTitle}</span>
            <br />
            <br />
            <ol className="text-[18px]">
              <li className="decoration-slice"> 1. {sectionData.List1} </li>
              <br />
              <li>2. {sectionData.List2} </li>
              <br />
              <li>3. {sectionData.List3} </li>
              <br />
              <li>4. {sectionData.List4} </li>
              <br />
              <li>5. {sectionData.List5} </li>
            </ol>
          </div>
        </>
      );
    } else {
      return (
        <div className="section-container">
          <h2 className="section-title">Data Not Found</h2>
          <p className="section-content">comming Soon.....................</p>
        </div>
      );
    }
  };
  return (
    <>
      <h1 className="text-4xl text-center mb-9">Explore some articles </h1>
      <div className="container">
        <aside className="side-nav">
          <ul className="nav-list">
            <li
              className={`nav-item ${
                selectedSection === "react" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("react")}
            >
              React Js
            </li>
            <li
              className={`nav-item ${
                selectedSection === "react_native" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("react_native")}
            >
              React Native
            </li>
            <li
              className={`nav-item ${
                selectedSection === "dsa" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("dsa")}
            >
              DSA
            </li>
            <li
              className={`nav-item ${
                selectedSection === "android" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("android")}
            >
              Android
            </li>
            <li
              className={`nav-item ${
                selectedSection === "c++" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("c++")}
            >
              C++ Language
            </li>
            <li
              className={`nav-item ${
                selectedSection === "python" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("python")}
            >
              Python
            </li>
            <li
              className={`nav-item ${
                selectedSection === "java" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("java")}
            >
              Java
            </li>
            <li
              className={`nav-item ${
                selectedSection === "html" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("html")}
            >
              HTML
            </li>
            <li
              className={`nav-item ${
                selectedSection === "sde_sheet" ? "selected" : ""
              }`}
              onClick={() => handleNavItemClick("sde_sheet")}
            >
              SDE Sheet
            </li>
          </ul>
        </aside>
        <section className="main-content">{renderContent()}</section>
      </div>
    </>
  );
};

export default Article;
