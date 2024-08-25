import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypewriterComponent() {
  return (
    <Typewriter
      words={["Learning React!", "Building apps.", "Creating amazing things!"]}
      loop={Infinity} // Infinite loop
      cursor
      cursorStyle="|"
      typeSpeed={100}
      deleteSpeed={60}
      delaySpeed={1000}
    />
  );
}

export default TypewriterComponent;
