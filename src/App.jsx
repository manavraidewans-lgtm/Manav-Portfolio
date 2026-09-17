
import { useState, useEffect } from "react";

import FlashScreen from "./Components/FlashScreen.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";

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
        <div className="bg-[#F6F5F1] overflow-hidden">

            <Navbar />

            <main className="pt-[8vh]">

                {/* ================= HOME ================= */}
                <section
                    id="home"
                    className="min-h-screen scroll-mt-[8vh] overflow-hidden"
                >
                    <Hero />
                </section>


                {/* ================= ABOUT ================= */}
                <section
                    id="about"
                    className="min-h-screen scroll-mt-[8vh] overflow-hidden"
                >
                    <About />
                </section>


                {/* ================= SKILLS ================= */}
                <section
                    id="skills"
                    className="min-h-screen scroll-mt-[8vh] overflow-hidden"
                >
                    <Skills />
                </section>


                {/* ================= PROJECTS ================= */}
                <section
                    id="projects"
                    className="min-h-screen scroll-mt-[8vh] overflow-hidden"
                >
                    <Projects/>
                </section>


                {/* ================= CONTACT ================= */}
                <section
                    id="contact"
                    className="min-h-screen scroll-mt-[8vh] overflow-hidden"
                >
                    <Contact />
                </section>

            </main>

        </div>
    );
}

export default App;
