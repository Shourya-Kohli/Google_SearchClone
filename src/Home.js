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
          <a href="https://www.gmail.com"> Gmail</a>

          <a href="https://www.google.co.in/imghp?hl=en&tab=wi&authuser=0&ogbl">
            {" "}
            Images
          </a>
          <AppsIcon />

          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
