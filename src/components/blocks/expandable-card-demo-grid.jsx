"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import ExpandedImage1 from "@/assets/pro1.png";
import ExpandedImage2 from "@/assets/pro2.png";
import ExpandedImage3 from "@/assets/pro3.png";
import ProjectImage1 from "@/assets/pro4.png";
import ProjectImage2 from "@/assets/pro5.png";
import ProjectImage3 from "@/assets/pro6.png";
import { AnimatedTooltip } from "../ui/Projects/animated-tooltip";
import { AnimatedTooltipPreview } from "../ui/Projects/tooltip";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  const toolsCard1 = [
    {
      id: 1,
      name: "HTML",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      id: 2,
      name: "Tailwind",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
    {
      id: 4,
      name: "Next.Js",
      designation: "",
      image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      id: 6,
      name: "Github",
      designation: "",
      image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
  ];

  const toolsCard2 = [
    {
      id: 1,
      name: "HTML",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      id: 2,
      name: "Tailwind",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
    {
      id: 4,
      name: "Next.Js",
      designation: "",
      image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      id: 5,
      name: "Redux",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
    },
    {
      id: 6,
      name: "Github",
      designation: "",
      image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
  ];

  const toolsCard3 = [
    {
      id: 1,
      name: "HTML",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      id: 2,
      name: "Tailwind",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "",
      image:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
    {
      id: 4,
      name: "Next.Js",
      designation: "",
      image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      id: 6,
      name: "Github",
      designation: "",
      image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
  ];

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] ">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-back2 dark:bg-neutral-900 sm:rounded-2xl overflow-hidden lg:overflow-auto"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.expandedSrc}
                  alt={active.title}
                  layout="responsive"
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top p-4"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start px-4 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-third dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-third dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-back1 text-primary border border-primary"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-third text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4 pt-10">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className=" flex flex-col rounded-lg cursor-pointer bg-back2 hover:border hover:border-primary "
          >
            <div className="flex flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={500}
                  height={500}
                  src={card.initialSrc}
                  alt={card.title}
                  layout="responsive"
                  className="h-60 w-full rounded-tr-lg rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col py-4">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-secondary dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                {index === 0 && <AnimatedTooltipPreview tools={toolsCard1} />}
                {index === 1 && <AnimatedTooltipPreview tools={toolsCard2} />}
                {index === 2 && <AnimatedTooltipPreview tools={toolsCard3} />}
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Next.JS, API, Tailwind",
    title: "CRUD Next with API",
    initialSrc: ProjectImage1,
    expandedSrc: ExpandedImage1,
    ctaText: "Visit",
    ctaLink: "https://next-assignment-rizky.vercel.app/",
    content: () => {
      return (
        <p>
          This is one of the projects I worked on during the bootcamp program at
          Mentored. This project is a CRUD system integrated with an API, and I
          use the Next Js framework and also style it using Tailwind.
        </p>
      );
    },
  },
  {
    description: "Next.JS, API, Tailwind, Redux",
    title: "NusaGo Travel Website",
    initialSrc: ProjectImage2,
    expandedSrc: ExpandedImage2,
    ctaText: "Visit",
    ctaLink: "https://nusa-go-travel.vercel.app/",
    content: () => {
      return (
        <p>
          This is one of the final projects that I worked on during the bootcamp
          program at Mentored. This project is a travel website that is
          integrated with an API, in this project there is a dark mode feature
          that uses Redux. <br />
          NusaGo travel also has a login system, which was created for admins
          and for admins there is a dashboard feature. The dashboard feature
          provides a CRUD system for customer data and also all content that
          will later appear on user pages. And for the user page, it certainly
          displays content from the API and there is also a profile update
          feature and select destinations based on categories.
        </p>
      );
    },
  },
  {
    description: "Next.JS, Tailwind, Magic UI, Aceternity",
    title: "Personal Portfolio",
    initialSrc: ProjectImage3,
    expandedSrc: ExpandedImage3,
    ctaText: "Visit",
    ctaLink: "https://porfolio-rizky-nugraha.vercel.app/",
    content: () => {
      return (
        <p>
          This Personal Portfolio website is a website that provides information
          about me. This website is the result of learning from various things
          that have been done in the bootcamp program. This website displays
          some of my best projects that have been done during bootcamp.
        </p>
      );
    },
  },

  {
    description: "HTML, CSS, Javascript",
    title: "Website Khastana",
    initialSrc: ProjectImage3,
    expandedSrc: ExpandedImage3,
    ctaText: "Visit",
    ctaLink: "https://khastanahadiubud.com/",
    content: () => {
      return (
        <p>
          This website is one of the projects developed for Khastan Hadi
          Tegallalang Ubud during my role as a Front End Developer at Tiara Hana
          Indonesia. The project focused on building a responsive and
          informative website tailored to the client’s needs.
        </p>
      );
    },
  },
];
