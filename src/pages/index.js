import Hero from "@/components/ui/Hero/Hero";
import Layout from "@/Layouts/layout";
import ParallaxText from "@/components/framer/parallaxText";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className=" w-full overflow-hidden text-primary bg-back1 py-8 lg:py-4">
        <ParallaxText direction={500} baseVelocity={-1}>
          Frontend Web Developer
        </ParallaxText>
      </div>
    </Layout>
  )
}