import React from "react";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about"> About</Link>
          <Link to="/store"> Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="about"> Gmail</Link>

          <Link to="about"> Images</Link>
          <AppsIcon />

          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://cdn.vox-cdn.com/thumbor/HqBAiwc9uD1sHBw2Uvac03pCXKE=/0x0:2012x1341/1400x1050/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
