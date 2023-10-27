import React, { useEffect } from "react";
import lottie from "lottie-web";

function LottieAnimation({ path, loop = true, autoplay = true, containerId }) {
  useEffect(() => {
    const container = document.getElementById(containerId);

    const animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop,
      autoplay,
      path,
    });

    return () => {
      animation.destroy();
    };
  }, [path, loop, autoplay, containerId]);

  return <div id={containerId} />;
}

export default LottieAnimation;
