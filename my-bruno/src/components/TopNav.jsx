import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  UilSearch,
  UilBell,
  UilBars,
  UilMultiply,
} from "@iconscout/react-unicons";
function TopNav() {
  const [clickMenu, setClickMenu] = useState(true);

  const handleClick = () => {
    setClickMenu((prev) => !prev);
    console.log("Click");
  };
  return (
    <div className="w-full flex items-center justify-center gap-3">
      <div>
        <h1>Bruno</h1>
      </div>
      <div
        className={` ${
          !clickMenu ? "opacity-100" : "opacity-0"
        } grid md:flex md:top-0 md:right-0 md:relative md:opacity-100 items-center justify-center md:px-3 md:justify-end gap-3 absolute right-3 top-3 bg-white w-full`}
      >
        <Link to={"home"}>
          <button>Home</button>
        </Link>
        <Link to={"about"}>
          <button>About</button>
        </Link>
        <Link to={"projects"}>
          <button>Works</button>
        </Link>
        <Link to={"projects"}>
          <button>Blog</button>
        </Link>
        <Link to={"projects"}>
          <button>Contact</button>
        </Link>
      </div>
      {clickMenu ? (
        <div
          className="absolute md:opacity-0 right-6 top-4"
          onClick={() => handleClick()}
        >
          <UilBars />
        </div>
      ) : (
        <div
          className="absolute md:opacity-0 right-6 top-4"
          onClick={() => handleClick()}
        >
          <UilMultiply />
        </div>
      )}
    </div>
  );
}

export default TopNav;
