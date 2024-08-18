"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";


const tools = [
    {
        id: 1,
        name: "HTML",
        designation: "",
        image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
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
        image:
            "https://cdn.worldvectorlogo.com/logos/next-js.svg",
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
        image:
            "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
]

export function AnimatedTooltipPreview({ tools }) {
    return (
        <div className="flex flex-row items-center justify-center my-4 w-full">
            <AnimatedTooltip items={tools} />
        </div>
    );
}