import TypingAnimation from "@/components/magicui/typing-animation"
import React from "react";
import {DockDemo} from "@/components/ui/Dock/DockDemo";
import OrbitingCircle from "../Orbit/OrbitingCircle";

export default function Hero() {
    const texts = [
        "Hello, my name",
        "Rizky Nugraha Pradana",
        "I'm a Frontend Developer"
    ];
    return (
        <section className="min-h-screen bg-back1 p-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-28 gap-4">
                <div className="w-full px-4 flex flex-col justify-center items-center ">
                    <TypingAnimation
                        className="text-2xl font-bold text-primary text-center lg:text-4xl "
                        texts={texts}
                        duration={100}
                        pauseBetweenAnimations={500}
                    />
                    <DockDemo/>
                </div>
                <div className="w-full flex justify-center items-center">
                    <OrbitingCircle/>
                </div>
            </div>
        </section>
    )
};

