import React from "react";
import FadeIn from "react-fade-in";
import coffee from "../images/coffee.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={coffee}
        alt="beach background"
        className="absolute object-cover w-full h-full"
      />
      <FadeIn>
        <section>
          <div className="relative flex justify-center pt-10 px-10 cursive">
            <div className="lg:text-8xl md:text-7xl sm:text-6xl text-white home-name">
              Hi, Welcome.
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
