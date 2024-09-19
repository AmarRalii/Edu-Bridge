import React from "react";
import "./Courses.css";
import Course from "../Single-Course/Course";

export default function Courses() {
  return (
    <div>
      <div className="dash-nav">
        <h5>ONLINE COURSE</h5>
        <h3>Sharpen Your Skills With Professional Online Courses</h3>
        <button>Join Now</button>
        
      </div>
      <h2>All Courses</h2>
      <div className="row  gy-4 ">
        <div className="col-md-4">
          <Course></Course>
        </div>
      </div>
    </div>
  );
}
