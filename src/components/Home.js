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
          <div className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 cursive">
            <h1 className="text-6xl text-white leading-none lg:leading-snug home-name">
              Hi, Welcome.
            </h1>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
