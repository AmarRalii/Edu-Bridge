import React, { useState } from "react";
import "./Course.css";
import courseImg from "../../assets/Course.png";
import icon from "../../assets/card.png";
export default function Course() {
  let [heart, setHeart] = useState(false);
  return (
    <div>
      <div className="card card2 ">
        <div
          className="icon cursor-pointer"
          onClick={() => {
            setHeart(!heart);
          }}
        >
          <i
            className="fa-solid fa-heart fa-2x "
            style={heart ? { color: "red" } : { color: "" }}
          ></i>
        </div>

        <img src={courseImg} alt="" />
        <div className="card-body">
          <p className="card-text">
           Guide To Be A Professional Frontend Developer
          </p>
          <h5 className="card-title">
            <img src={icon} alt="" /> John Smith
          </h5>
        </div>
      </div>
    </div>
  );
}
