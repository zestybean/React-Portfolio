import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("I resized here!");
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
