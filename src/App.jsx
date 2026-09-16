import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FlashScreen from "./Components/FlashScreen.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Skills from "./Components/Skills.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const sections = [
      {
        ref: homeRef,
        enterX: -120,
        exitX: -180,
      },
      {
        ref: aboutRef,
        enterX: -120,
        exitX: -180,
      },
      {
        ref: skillsRef,
        enterX: 120,
        exitX: 180,
      },
      {
        ref: projectsRef,
        enterX: -120,
        exitX: -180,
      },
      {
        ref: contactRef,
        enterX: 120,
        exitX: 180,
      },
    ];

    const animations = [];

    sections.forEach(({ ref, enterX, exitX }) => {
      if (!ref.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,

          // Animation starts when section enters viewport
          start: "top bottom",

          // Animation finishes when section completely leaves viewport
          end: "bottom top",

          // Smoothly connects animation with scrolling
          scrub: 1,
        },
      });

      tl.fromTo(
        ref.current,
        {
          x: enterX,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        }
      ).to(ref.current, {
        x: exitX,
        opacity: 0,
        duration: 0.65,
        ease: "power2.in",
      });

      animations.push(tl);
    });

    ScrollTrigger.refresh();

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, [loading]);

  if (loading) {
    return <FlashScreen />;
  }

  return (
    <div className="bg-[#F6F5F1] overflow-hidden">
      <Navbar />

      <main className="pt-[8vh]">

        {/* ================= HOME ================= */}
        <section
          id="home"
          className="min-h-screen scroll-mt-[8vh] overflow-hidden"
        >
          {/* <div ref={homeRef} className="min-h-screen"> */}
            <Hero />
          {/* </div> */}
        </section>


        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="min-h-screen scroll-mt-[8vh] overflow-hidden"
        >
          {/* <div ref={aboutRef} className="min-h-screen"> */}
            <About />
          {/* </div> */}
        </section>


        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="min-h-screen scroll-mt-[8vh] overflow-hidden"
        >
          {/* <div ref={skillsRef} className="min-h-screen"> */}
            <Skills />
          {/* </div> */}
        </section>


        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="min-h-screen scroll-mt-[8vh] overflow-hidden"
        >
          <div ref={projectsRef} className="min-h-screen">
            <h1>Projects</h1>
          </div>
        </section>


        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="min-h-screen scroll-mt-[8vh] overflow-hidden"
        >
          {/* <div ref={contactRef} className="min-h-screen"> */}
            <Contact />
          {/* </div> */}
        </section>

      </main>
    </div>
  );
}

export default App;