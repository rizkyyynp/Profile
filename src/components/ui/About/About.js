import AnimateTitle from "@/components/framer/AnimateTitlte"
import TextRevealByWord from "@/components/magicui/text-reveal"

export default function About() {
    return (
        <section className="lg:h-min-screen bg-back1 p-4 md:px-8 py-6 pt-20">
            <div>
                <AnimateTitle
                    title={"About me"}
                    className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px] text-primary"
                    wordSpace="mr-[14px]"
                    charSpace="mr-[0.0001em]"
                />
            </div>
            <TextRevealByWord
                text="As a graduate of Asia e University's Bachelor of Information and Communication Technology program, I possess a strong foundation in web development and related technologies. During my internship as a WordPress developer, I had the opportunity to hone my skills in web design using WordPress, AppScript, and Spreadsheets. I also participated in a bootcamp program from dibimbing, where I acquired new skills in React, Tailwind CSS, Node.js, and Next.js, and implemented them through the creation of mini projects."
            />
        </section>
    );
}