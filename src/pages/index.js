import About from "@/components/ui/About/About";
import Hero from "@/components/ui/Hero/Hero";
import Layout from "@/Layouts/layout";
import AnimatedBeams from "@/components/ui/Beam/AnimatedBeams";
import Projects from "@/components/ui/Projects/projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <AnimatedBeams />
      <Projects />
    </Layout>
  )
}