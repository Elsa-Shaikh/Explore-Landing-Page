import React from "react";
import car_video from "../Assets/car.mp4";
import bg1 from "../Assets/bg1.jpg";
import bg2 from "../Assets/bg2.jpg";
import bg3 from "../Assets/bg3.jpg";

const Background = ({ play, heroCount }) => {
  if (play) {
    return (
      <video className="bg fade-in" autoPlay loop muted>
        <source src={car_video} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={bg1} alt="BackgroundImage" className="bg fade-in" />;
  } else if (heroCount === 1) {
    return <img src={bg2} alt="BackgroundImage" className="bg fade-in" />;
  } else if (heroCount === 2) {
    return <img src={bg3} alt="BackgroundImage" className="bg fade-in" />;
  }
};

export default Background;
