import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/OBJECTS.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
            <p>
              EduBridge
              <span>Empower your Future</span>
            </p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Courses"} className="nav-link ">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Wishlist"} className="nav-link ">
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Cart"} className="nav-link ">
                  Cart
                </Link>
              </li>
            </ul>
            <div className="buttons-container">
              <button><Link to={'/login'}>Login</Link></button>
              <button><Link to={'/signup'} >SignUp</Link></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
