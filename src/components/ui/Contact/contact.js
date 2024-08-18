import IconCloud from "@/components/magicui/icon-cloud";
import AnimateTitle from "@/components/framer/AnimateTitlte";
import { DockDemo } from "../Dock/DockDemo";


const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export default function Contact() {
    return (
        <section id="contact" className="lg:h-min-screen bg-back1 p-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative flex flex-col justify-center lg:justify-center items-center mb-4 lg:mb-0">
                <AnimateTitle
                    title={"Contact Me"}
                    className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px] text-primary"
                    wordSpace="mr-[14px]"
                    charSpace="mr-[0.0001em]"
                />
                <div>
                    <DockDemo />
                </div>
            </div>
            <div className="relative flex h-full w-full overflow-hidden justify-center items-center">
                <div className="bg-slate-200 rounded-full">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </section>
    )
}