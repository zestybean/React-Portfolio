import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-cols-1 items-center bg-gray-400 text-center"
          : "hidden"
      }
    >
      <NavLink
        onClick={toggle}
        to="/post"
        activeClassName="text-white bg-gray-400"
        className=" p-4 rounded text-white hover:text-gray-100 body"
      >
        Blogs
      </NavLink>
      <NavLink
        onClick={toggle}
        to="/project"
        activeClassName="text-white bg-gray-400"
        className=" p-4 rounded text-white hover:text-gray-100 body"
      >
        Projects
      </NavLink>
      <NavLink
        onClick={toggle}
        to="/about"
        activeClassName="text-white bg-gray-400"
        className=" p-4 rounded text-white hover:text-gray-100 body"
      >
        About Me
      </NavLink>
      <div className="grid-rows-1 items-center">
        <SocialIcon
          onClick={toggle}
          url="https://github.com/zestybean"
          className="ml-4 mr-4 my-3 "
          target="_blank"
          fgColor="#fff"
          style={{ height: 45, width: 45 }}
        />
        <SocialIcon
          onClick={toggle}
          url="https://www.linkedin.com/in/brandolugo"
          className="ml-4 mr-4 my-3 "
          target="_blank"
          fgColor="#fff"
          style={{ height: 45, width: 45 }}
        />
        <SocialIcon
          onClick={toggle}
          url="mailto:brando.lugo@gmail.com"
          className="ml-4 mr-4 my-3"
          target="_blank"
          fgColor="#fff"
          style={{ height: 45, width: 45 }}
        />
      </div>
    </div>
  );
}
