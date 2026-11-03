import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TourShowcase from "@/components/TourShowcase";
import WhyAI from "@/components/WhyAI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TourShowcase />
        <WhyAI />
      </main>
      <Footer />
    </>
  );
}
