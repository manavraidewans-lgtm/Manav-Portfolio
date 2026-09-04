import { useState, useEffect } from "react";

import FlashScreen from "./Components/FlashScreen.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FlashScreen />;
  }

  return (
    <div>
      <Navbar />

      <main className="pt-[8vh]">
        
        <section id="home" className="scroll-mt-[8vh] h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen scroll-mt-[8vh]">
          <h1>About</h1>
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