import TypingAnimation from "@/components/magicui/typing-animation"
import React from "react";
import { DockDemo } from "@/components/ui/Dock/DockDemo";
import OrbitingCircle from "../Orbit/OrbitingCircle";
import ParallaxText from "@/components/framer/ParallaxText";
import AnimateButton from "./button";

export default function Hero() {
    const texts = [
        "Hello, my name",
        "Rizky Nugraha Pradana",
        "I'm a Frontend Developer"
    ];
    return (
        <section className="lg:h-min-screen bg-back1 p-4 md:px-8 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:mt-28 gap-4">
                <div className="w-full px-4 flex flex-col justify-center items-center ">
                    <TypingAnimation
                        className="text-2xl font-bold text-primary text-center lg:text-4xl "
                        texts={texts}
                        duration={100}
                        pauseBetweenAnimations={500}
                    />
                    <DockDemo />
                    <div className="my-4">
                        <AnimateButton />
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <OrbitingCircle />
                </div>
            </div>
            <div className=" w-full overflow-hidden text-primary bg-back1">
                <ParallaxText direction={500} baseVelocity={-1}>
                    Frontend Web Developer
                </ParallaxText>
            </div>
        </section>
    )
};

