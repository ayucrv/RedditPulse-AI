import AuroraBackground from "../components/effects/AuroraBackground";
import GridBackground from "../components/effects/GridBackground";
import MouseGlow from "../components/effects/MouseGlow";
import Particles from "../components/effects/Particles";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/landing/Hero";
import TrustedBy from "../components/landing/TrustedBy";
import BentoFeatures from "../components/landing/BentoFeatures";
import CTA from "../components/landing/CTA";

export default function Landing() {
  return (
    <>
      <AuroraBackground />
      <GridBackground />
      <Particles />
      <MouseGlow />

      <Navbar />

      <main className="relative overflow-x-hidden">

        <Hero />

        <TrustedBy />

        <BentoFeatures />

        <CTA />

      </main>

      <Footer />

    </>
  );
}