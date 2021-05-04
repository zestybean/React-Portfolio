import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import avatar from "../images/me.png";

export default function NavBar() {
  return (
    <header className="bg-gray-500 bg-opacity-70">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact>
            <div className="inline-flex  my-6 rounded-full h-24 w-24 flex justify-items-center bg-white">
              <img src={avatar} alt=""></img>
            </div>
          </NavLink>
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 my-4 text-white hover:text-gray-100 text-5xl font-bold cursive tracing-widest"
          >
            Brando
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-gray-400"
            className="inline-flex items-center py-3 px-3 my-12 rounded text-white hover:text-gray-100 body"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-gray-400"
            className="inline-flex items-center py-3 px-3 my-12 rounded text-white hover:text-gray-100 body"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-gray-400"
            className="inline-flex items-center py-3 px-3 my-12 rounded text-white hover:text-gray-100 body"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/zestybean"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/brandolugo"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </header>
  );
}
