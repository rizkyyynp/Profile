import AnimateTitle from "@/components/framer/AnimateTitlte"
import AnimateParagraph from "@/components/framer/AnimateParagraph"

export default function About() {
    return (
        <section className="lg:h-min-screen bg-back1 p-4 md:px-8 py-6">
            <div className="mb-10 flex w-full items-center justify-between gap-x-2">
                <AnimateTitle
                    title={"About me"}
                    className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px] text-primary"
                    wordSpace="mr-[14px]"
                    charSpace="mr-[0.0001em]"
                />
            </div>
            <div className="text-primary mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed ">
                <AnimateParagraph
                    paragraph="As a graduate of Asia e University's Bachelor of Information and Communication Technology program, I possess a strong foundation in web development and related technologies. During my internship as a WordPress developer, I had the opportunity to hone my skills in web design using WordPress, AppScript, and Spreadsheets. I also participated in a bootcamp program from dibimbing, where I acquired new skills in React, Tailwind CSS, Node.js, and Next.js, and implemented them through the creation of mini projects."
                    delay={1.5}
                />
                <AnimateParagraph
                    paragraph="With my goal of pursuing a career as a Front-End Developer, I am dedicated to developing responsive user interfaces and clean layouts. In terms of project management, I frequently use tools such as GitHub to ensure efficient team collaboration and effective project control."
                    delay={1.8}
                />
                <AnimateParagraph
                    paragraph="By combining formal education, hands-on experience, and non-formal education, I am committed to continuous learning and growth. I am ready to face new challenges and make a positive contribution to any team or project I am involved in."
                    delay={2}
                />
            </div>
        </section>
    )
}