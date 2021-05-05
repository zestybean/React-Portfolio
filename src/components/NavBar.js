import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import avatar from "../images/me.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-500 items-center">
      <div className="container mx-auto flex justify-between">
        <div className="flex pl-6">
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
        </div>

        <div className="px-4 cursor-pointer md:hidden inline-flex items-center py-3 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-6 md:block hidden">
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

          <SocialIcon
            url="https://github.com/zestybean"
            className="ml-4 mr-4"
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
          <SocialIcon
            url="mailto:brando.lugo@gmail.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </nav>
  );
}
