import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <div className="type-writer">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("React.js Developer")
            .pauseFor(2500)
            .deleteAll()
            .typeString("Back-end Developer")
            .pauseFor(2500)
            .deleteAll()
            .typeString("Spikeball Enthusiast")
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
        options={{ loop: true }}
      />
    </div>
  );
}

export default TypeWriter;
