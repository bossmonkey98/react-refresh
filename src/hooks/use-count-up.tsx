import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface UseCountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
}

export const useCountUp = ({ end, duration = 2000, decimals = 0 }: UseCountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (endValue - startValue) * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return { count: formattedCount, ref };
};
