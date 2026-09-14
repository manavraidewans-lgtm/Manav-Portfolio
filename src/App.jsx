import { useState, useEffect } from "react";

import FlashScreen from "./Components/FlashScreen.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FlashScreen />;
  }

  return (
    <div className="bg-[#F6F5F1]">
      <Navbar />

      <main className="pt-[8vh]">
        
        <section id="home" className="scroll-mt-[8vh] h-screen">
          <Hero />
          <div className="h-[90%] w-[90%] bg-red"></div>
        </section>

        <section id="about" className="min-h-screen scroll-mt-[8vh]">
          <About/>
        </section>

        <section id="skills" className="min-h-screen scroll-mt-[8vh]">
          <h1>Skills</h1>
        </section>

        <section id="projects" className="min-h-screen scroll-mt-[8vh]">
          <h1>Projects</h1>
        </section>

        <section id="contact" className="min-h-screen scroll-mt-[8vh]">
          <h1>Contact</h1>
        </section>

      </main>
    </div>
  );
}

export default App;