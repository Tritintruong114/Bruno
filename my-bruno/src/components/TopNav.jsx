import React from "react";
import { Link } from "react-router-dom";
function TopNav() {
  return (
    <div className="w-full flex items-center justify-center gap-3">
      <Link to={"home"}>
        <button>Home</button>
      </Link>
      <Link to={"about"}>
        <button>About</button>
      </Link>
      <Link to={"projects"}>
        <button>Projects</button>
      </Link>
    </div>
  );
}

export default TopNav;
