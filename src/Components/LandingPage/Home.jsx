import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Agencia de Marketing Digital Quito Ecuador Nativos Digitales 1️⃣ (1) 1.png";
import graphicimg from '../../assets/Rectangle 69.png'
import webimg from '../../assets/Group 467.png'
import digimg from '../../assets/Group 464.png'
import icon1 from '../../assets/Ellipse 11.png'
import icon2 from '../../assets/Ellipse 12.png'
import icon3 from '../../assets/Ellipse 10.png'
import educationimg from '../../assets/education.png';
import student2 from '../../assets/Student2.png';



import "./Home.css";
import HomeSlider from './../Slider/HomeSlider';

export default function Home() {
  return (
    <div className="">
      <div className="home">
        <div className="container">
           <div className="home-caption">
          <h1>EduBridge</h1>
          <h4>Empower your Future</h4>
          <p>
            {" "}
            <span>Learn</span> at your own pace, anytime, anywhere.{" "}
            <span>Start</span> your journey today!
          </p>
          <div className="home-buttons-container">
            <button>
              {" "}
              <Link to={"/courses"}>See Coursses</Link>{" "}
            </button>
            <button>
              {" "}
              <Link to={"/about"}>why us</Link>{" "}
            </button>
          </div>
            </div>
          <div className="home-image">
          <img src={img} alt="" />
        </div>
        </div>
       
      
      </div>
      <section className="top-courses container">
        <h4>Our Top Coursesse</h4>
        <div className="courses-container">
        <div className="card">
          <h2>Graphic Design</h2>
          <img src={graphicimg}  alt="" />
          <p>Advanced typography design and Illustration design. <span>99.99$</span></p>
          <div className="icon">
            <img src={icon1} alt="" />
            <h5>Guy Howkins</h5>
          </div>
        </div>
        <div className="card secound-card">
          <h2>Web Design</h2>
          <img src={webimg}  alt="" />
          <p>The most recent advancements in the field of web development. <span>99.99$</span></p>
          <div className="icon">
            <img src={icon2} alt="" />
            <h5>Darrell Steward</h5>
          </div>
        </div>
        <div className="card">
          <h2> Digital Market</h2>
          <img src={digimg}  alt="" />
          <p>All aspects of marketing, as the most recent marketing trends <span>99.99$</span></p>
          <div className="icon">
            <img src={icon3} alt="" />
            <h5>Kristin Waston</h5>
          </div>
        </div>
        <div className="card media-card">
          <h2>Web Design</h2>
          <img src={webimg}  alt="" />
          <p>The most recent advancements in the field of web development. <span>99.99$</span></p>
          <div className="icon">
            <img src={icon2} alt="" />
            <h5>Darrell Steward</h5>
          </div>
        </div>
        </div>
      </section>
      <section className="education-section container">
        <h4>Best Education Platforme</h4>
        <div className="education-paragraph">
         <img src={educationimg} alt="" />
          <p>Welcome to [EduBridge], the ultimate destination for online courses designed to ignite your passion and advance your career. Whether you're looking to develop new skills, master a hobby, or achieve professional growth, our platform connects you with expert instructors from around the world. With thousands of courses in tech, business, arts, and more, there's something for everyone. Learn at your own pace, anytime, anywhere, and gain the knowledge you need to thrive in today's fast-paced world.</p>
        </div>
        <ul>
        Why Choose Us?
          <li>- Expert Instructors: Learn from industry leaders and experienced professionals.
          </li>
          <li>- Flexible Learning: Access courses on-demand and fit learning into your schedule.
          </li>
          <li>- Diverse Course Selection: Explore a wide range of subjects tailored to your interests.
          </li>
          <li>- Certificates of Completion: Earn certificates that showcase your new skills.
          </li>
        </ul>
        <h6>Start learning today and unlock your potential with EduBridge 
        </h6>
      </section>
      <section className="testmoniols">
        <h4>What our students say</h4>
        <HomeSlider/>
        <div className="testmoniol-container ">
          <div className="testmoniol-caption">
            <div className="container">
               <h3>Start your journey today!</h3>
            <p>Ready to take your career to the next level? Sign up for Schooler's online courses today!</p>
            <button> <Link> Try for free </Link> </button>
            </div>
           
          </div>
          <div className="testmoniol-img">
            <img src={student2} alt="" />
            <div className="background-img-color"></div>
          </div>
        </div>
      </section>
      <section className="about-us"></section>
    </div>
  );
}
