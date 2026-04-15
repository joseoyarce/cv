/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  const revealVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 z-50 mix-blend-difference">
        <div className="logo">
          <img 
            src="https://framerusercontent.com/assets/hrbRdqWrRntXB1ihOInXSTwA.svg" 
            alt="Logo" 
            className="h-6"
            referrerPolicy="no-referrer"
          />
        </div>
        <ul className="flex gap-8 list-none">
          {["WORK", "ABOUT", "CONTACT"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-white no-underline text-[13px] font-black tracking-widest hover:text-accent transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y, scale }}
            className="absolute inset-0 z-[-1]"
          >
            <img 
              src="https://framerusercontent.com/images/cKuTS8u7Z5a04Mq4liKz4JTSxiE.jpg" 
              alt="Hero" 
              className="w-full h-full object-cover brightness-[0.6]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-[18vw] font-black tracking-[-0.06em] leading-[0.8] text-center"
          >
            <span className="text-accent">VER</span>TICAL
          </motion.h1>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="absolute bottom-16 right-8 text-right max-w-[500px]"
          >
            <h3 className="text-accent text-4xl font-bold leading-none mb-2">I BREAK THINGS</h3>
            <h3 className="text-white text-4xl font-bold leading-none mb-6">TO SEE WHAT THEY ARE MADE OF</h3>
            <div className="flex flex-col items-end gap-1">
              <span className="text-accent text-xl font-bold">Adam Knoxville</span>
              <span className="text-[11px] text-text-muted tracking-widest">VISUAL ARTIST / CREATOR</span>
            </div>
          </motion.div>
        </section>

        {/* Statement Section */}
        <section id="about" className="px-8 py-32">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="text-[clamp(32px,6vw,80px)] font-bold tracking-[-0.04em] max-w-[1400px] uppercase leading-tight"
          >
            ART IS A CONTROLLED INTERRUPTION. A PRACTICE OF CATCHING THE MOMENT <span className="text-text-muted">BEFORE IT DISAPPEARS.</span>
          </motion.h2>
        </section>

        {/* Gallery Section */}
        <section id="work" className="px-8 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "https://framerusercontent.com/images/eEXduufTWysqV1SPGfx1uvy19o.jpeg", title: "NEW YORK — 2025" },
              { src: "https://framerusercontent.com/images/bAWwNVziCexjLuSRptw4jwUUQ.jpeg", title: "PARIS — 2023" },
              { src: "https://framerusercontent.com/images/DA0Q8AgIJP81uFWvLkpKSZo.jpeg", title: "SINGAPORE — 2014" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={revealVariants}
                className="group"
              >
                <div className="overflow-hidden mb-4 aspect-[1/1.2]">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="font-mono text-xs text-text-muted">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Info Section */}
        <section className="px-8 pb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="flex items-center gap-4"
          >
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
            <p className="font-mono text-sm text-accent uppercase tracking-wider">LIVE EXHIBITION: TATE MODERN — LONDON</p>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="px-8 pt-24 pb-12 border-t border-border-dark">
        <h2 className="text-[15vw] font-black text-border-dark leading-none mb-16 tracking-tighter">VERTICAL</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] text-text-muted font-bold tracking-[0.2em] uppercase">CONTACT</h4>
            <p className="text-white">hey@adamknoxville.design</p>
            <p className="text-white">(44) 7700 900 482</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] text-text-muted font-bold tracking-[0.2em] uppercase">LOCATION</h4>
            <p className="text-white">Studio 204, Shoreditch</p>
            <p className="text-white">London, United Kingdom</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] text-text-muted font-bold tracking-[0.2em] uppercase">SOCIAL</h4>
            <div className="flex gap-4 text-white">
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <span>/</span>
              <a href="#" className="hover:text-accent transition-colors">Youtube</a>
              <span>/</span>
              <a href="#" className="hover:text-accent transition-colors">X</a>
            </div>
          </div>
        </div>
        <p className="mt-24 text-[12px] text-text-muted">© 2026 VERTICAL BY ADAM KNOXVILLE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
