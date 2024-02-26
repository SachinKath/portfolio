import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function ScrollEffect({ className, options }) {
  return useEffect(() => {
    ScrollReveal().reveal(className, options);
  });
}

export default ScrollEffect;
