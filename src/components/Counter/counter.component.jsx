import { useState, useEffect, useRef } from "react";

const Counter = ({ targetNumber, duration = 2000, color = "text-secondary", string = "", size="text-xl" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(targetNumber);
      const increment = end / (duration / 16); // ~60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetNumber, duration]);

  return (
    <div ref={ref} className={`${size} font-bold ${color}`}>
      <p>{count}{string}</p>
    </div>
  );
};

export default Counter;