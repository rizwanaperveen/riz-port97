'use client';
import React, { use } from "react";
import Hero from "@/components/Hero";
import Project from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      anchorPlacement: 'bottom-bottom',
      mirror: true,
      offset: 160,
    });
    AOS.refresh();
  }, []);
  
  return (
    <main>
    <Hero />
    <About />
  <Project />
   <Skills />
    <Contact />
  
    </main>
  );
}