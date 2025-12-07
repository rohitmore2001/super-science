'use client';

import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import CoursesSection from '@/components/home/CoursesSection';
import AboutSection from '@/components/home/AboutSection';
import FactsSection from '@/components/home/FactsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CoursesSection />
      <AboutSection />
      <FactsSection />
      <ContactSection />
    </>
  );
}

