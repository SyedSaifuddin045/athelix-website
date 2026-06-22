import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { MetricsBar } from "@/components/MetricsBar";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Screenshots } from "@/components/Screenshots";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricsBar />
        <FeaturesGrid />
        <Screenshots />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
