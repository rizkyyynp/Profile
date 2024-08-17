import AnimateTitle from "@/components/framer/AnimateTitlte"
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid"

export default function Projects() {
    return (
        <section className="lg:h-min-screen bg-back1 p-4 md:px-8 lg:pb-16 pt-20">
            <div>
                <AnimateTitle
                    title={"My Projects"}
                    className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px] text-primary"
                    wordSpace="mr-[14px]"
                    charSpace="mr-[0.0001em]"
                />
            </div>
            <div>
                <ExpandableCardDemo />
            </div>
        </section>
    )
}