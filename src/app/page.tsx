import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import HiringSuite from "@/components/home/HiringSuite";
import Workflow from "@/components/home/Workflow";
import StepSection from "@/components/home/StepSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Workflow />
      <StepSection />
      <HiringSuite />
      <Footer />
    </main>
  );
}
