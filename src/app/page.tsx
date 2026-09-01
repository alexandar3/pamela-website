import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TourShowcase from "@/components/TourShowcase";
import HowItWorks from "@/components/HowItWorks";
import WhyAI from "@/components/WhyAI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TourShowcase />
        <HowItWorks />
        <WhyAI />
      </main>
      <Footer />
    </>
  );
}
