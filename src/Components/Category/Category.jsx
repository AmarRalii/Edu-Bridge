import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Category.css";

export default function Category() {
  return (
    <div className="category">
      <div className="row">
        <div className="col-md-8 ">
          <NavLink to={"design"}>Design</NavLink>
          <NavLink to={"development"}>development</NavLink>
          <NavLink to={"Marketing"}>Marketing</NavLink>
          <NavLink to={"Business"}>Business</NavLink>
          <NavLink to={"photography"}>photography</NavLink>
        </div>
        <div className="col-md-3">
          <input type="text" name="" id="" placeholder="Search Courses" />
          <i className="fa-solid fa-search"></i>
        </div>
        <div className="subcategory py-4">

        <Outlet></Outlet>
        </div>
        
      </div>
    </div>
  );
}
