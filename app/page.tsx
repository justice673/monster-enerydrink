'use client';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorSection from './components/FlavorSection';
import ProductStory from './components/ProductStory';
import WhyMonster from './components/WhyMonster';
import BestSellers from './components/BestSellers';
import EcommerceSection from './components/EcommerceSection';
import Newsletter from './components/Newsletter';
import FloatingCan from './components/FloatingCan';
import ParticleOverlay from './components/ParticleOverlay';
import Footer from './components/Footer';

export default function Home() {

  useEffect(() => {
    // Fix for scroll restoration on refresh if needed
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <main className="bg-background min-h-screen text-white overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <ParticleOverlay />
      <FloatingCan />
      <Hero />

      <div id="flavors">
        <FlavorSection
          id="neon-blue"
          name="Neon Blue"
          description="Electrify your senses with the sharp, crisp taste of blue raspberry and citrus. The ultimate pre-game ignition."
          color="#1E40FF"
          accentColor="#1E40FF"
          ingredients={["Blue Raspberry", "Citrus Zest", "160mg Caffeine"]}
          index={0}
        />
        <FlavorSection
          id="monster-grape"
          name="Monster Grape"
          description="Deep, bold, and unrelenting. A surge of grape flavor that pulls you in and keeps you moving."
          color="#7E22CE"
          accentColor="#7E22CE"
          ingredients={["Concord Grape", "Acai Berry", "B-Vitamin Complex"]}
          index={1}
        />
        <FlavorSection
          id="tropical-fire"
          name="Tropical Fire"
          description="Ignite your potential with a fiery blend of mango, pineapple, and a kick of spice. Feel the heat."
          color="#F97316"
          accentColor="#F97316"
          ingredients={["Mango", "Spicy Pineapple", "Green Tea Extract"]}
          index={2}
        />
      </div>

      <ProductStory />
      <WhyMonster />
      <BestSellers />
      <EcommerceSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
