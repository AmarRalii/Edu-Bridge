import React from "react";
import Slider from "react-slick";
import './HomeSlider.css';
import icon1 from '../../assets/student1.png';
import icon2 from '../../assets/Ellipse 12.png';
import icon3 from '../../assets/Ellipse 10.png';
import icon4 from '../../assets/Ellipse 11.png';
function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="testmoniols-container">
            <img src={icon1} alt="" />
          <h3>EMILY </h3>
          <h5>UI/UX Designer</h5>
          <p>
          "Great course with up-to-date content, engaging instructors, and valuable hands-on projects that prepared me well for real-world applications. "</p>
        </div>
        <div className="testmoniols-container">
            <img src={icon3} alt="" />
          <h3>Jack </h3>
          <h5>Wed Developer</h5>
          <p>
          "Great course with up-to-date content, engaging instructors, and valuable hands-on projects that prepared me well for real-world applications. "</p>
        </div>
        <div className="testmoniols-container">
            <img src={icon2} alt="" />
          <h3>Darrell  </h3>
          <h5>Front-end Developer</h5>
          <p>
          "Great course with up-to-date content, engaging instructors, and valuable hands-on projects that prepared me well for real-world applications. "</p>
        </div>
        <div className="testmoniols-container">
            <img src={icon4} alt="" />
          <h3>Ali </h3>
          <h5>Back-end Developer</h5>
          <p>
          "Great course with up-to-date content, engaging instructors, and valuable hands-on projects that prepared me well for real-world applications. "</p>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
