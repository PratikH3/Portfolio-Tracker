import React from "react";

import Navbar from "./Navbar";
export default function About() {
  return (
    <div>
      <Navbar />
      <h2 className="d-flex justify-content-center mt-5">About Us</h2>
      <div className="d-flex justify-content-center flex-column m-4">
        <p>
          GIPHY tells the best way to make a video background look great. They
          position their introduction and values pleasantly under a short
          animation and then jump into their augmented reality-like GIF that
          makes visitors feel like they're on an adventure by looking down the
          page.
        </p>
        <p>
          Since their job is to demonstrate their expertise in animated
          illustrations, GIPHY effectively narrates their story by showing a
          wide range of animated effects that are modern, energetic, and
          creative all the same.
        </p>
      </div>
    </div>
  );
}
