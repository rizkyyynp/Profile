"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 min-h-[200vh]", className)}>
      <div className="sticky top-0 mx-auto flex items-center bg-transparent pt-10">
        <p className="flex flex-wrap text-lg font-bold text-white/20 dark:text-white/20 md:text-3xl lg:text-4xl xl:text-5xl pt-10">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 my-2">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-primary dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
