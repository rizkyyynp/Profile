import About from "@/components/ui/About/About";
import Hero from "@/components/ui/Hero/Hero";
import Layout from "@/Layouts/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}