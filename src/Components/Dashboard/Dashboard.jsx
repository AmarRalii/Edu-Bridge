import React from "react";
import {NavLink, Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col-md-3 ">
          <div className="container">
            <h2>OVERVIEW</h2>
            <ul>
              <NavLink to={""}>
                {" "}
                <i class="fa-solid fa-house"></i> Dashboard
              </NavLink>

              <NavLink to={"category"}>
                <i class="fa-solid fa-list"></i> Courses
              </NavLink>

              <NavLink to={"cart"}>
                <i class="fa-solid fa-cart-shopping"></i> Cart
              </NavLink>

              <NavLink to={"wishlist"}>
                <i class="fa-solid fa-heart"></i> Wish List
              </NavLink>

              <NavLink to={"profile"}>
                {" "}
                <i class="fa-solid fa-user"></i> Profile
              </NavLink>
            </ul>
            <h2>SETTINGS</h2>
            <ul>
              <NavLink to={"setting"}>
                {" "}
                <i class="fa-solid fa-gear"></i> Setting
              </NavLink>

              <NavLink to={"/login"}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="col-md-9 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
