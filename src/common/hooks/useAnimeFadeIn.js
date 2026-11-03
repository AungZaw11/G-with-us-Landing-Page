import { useEffect, useRef } from "react";

export const useAnimeFadeIn = (delay = 0, duration = 800) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const anime = window.anime;

    if (elementRef.current && anime) {
      anime({
        targets: elementRef.current,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: duration,
        delay: delay,
        easing: "easeOutExpo",
      });
    }
  }, [delay, duration]);

  return elementRef;
};
