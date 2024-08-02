"use client";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function TypingAnimation({
  texts,
  duration = 200,
  className,
  pauseBetweenAnimations = 2000
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (i < texts[currentTextIndex].length) {
      const typingEffect = setInterval(() => {
        setDisplayedText(texts[currentTextIndex].substring(0, i + 1));
        setI(i + 1);
      }, duration);
      return () => clearInterval(typingEffect);
    } else {
      const pauseEffect = setTimeout(() => {
        setI(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, pauseBetweenAnimations);
      return () => clearTimeout(pauseEffect);
    }
  }, [i, texts, currentTextIndex, duration, pauseBetweenAnimations]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}>
      {displayedText ? displayedText : texts[currentTextIndex]}
    </h1>
  );
}
