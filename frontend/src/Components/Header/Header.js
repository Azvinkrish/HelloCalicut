import React from "react";
import "./Header.css";
import "../../App.css";
import { Button } from "../Navbar/Button";

const Header = () => {
  return (
    <div className="hero-container">
      <video src="/videos/4kcalicity.mp4" autoPlay loop muted />
      <h1> Lets commute </h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path='/blog'
        >
          Feeds
        </Button>
      </div>
    </div>
  );
};

export default Header;
