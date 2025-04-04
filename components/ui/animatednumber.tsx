"use client";
import { useEffect, useState } from "react";

type Props = {
  target: number;
  duration?: number;
  suffix?: string;
};

export default function AnimatedNumber({ target, duration = 2000, suffix = "" }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 30;
    const totalSteps = duration / incrementTime;
    const step = (end - start) / totalSteps;

    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.round(current));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString() + suffix}</span>;
}
