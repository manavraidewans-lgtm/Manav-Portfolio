
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SkillCard from "./SkillCard";

function SkillsCards() {

    const cardsRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(
            cardsRef.current.children,
            {
                x: -80,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            }
        );

    }, []);

    return (
        <div
            ref={cardsRef}
            className="w-full flex flex-wrap justify-evenly items-start gap-3 p-2 sm:gap-4 md:gap-5 lg:gap-6"
        >

            <SkillCard
                IconName="ri-html5-line"
                Tittle="HTML"
            />

            <SkillCard
                IconName="ri-css3-fill"
                Tittle="CSS"
            />

            <SkillCard
                IconName="simple-icons:javascript"
                Tittle="JavaScript"
            />

            <SkillCard
                IconName="simple-icons:react"
                Tittle="React"
            />

            <SkillCard
                IconName="simple-icons:tailwindcss"
                Tittle="Tailwind CSS"
            />

            <SkillCard
                IconName="simple-icons:bootstrap"
                Tittle="Bootstrap"
            />

            <SkillCard
                IconName="simple-icons:git"
                Tittle="Git"
            />

            <SkillCard
                IconName="simple-icons:github"
                Tittle="GitHub"
            />

            <SkillCard
                IconName="simple-icons:vite"
                Tittle="Vite"
            />

            <SkillCard
                IconName="simple-icons:gsap"
                Tittle="GSAP"
            />

            <SkillCard
                IconName="simple-icons:figma"
                Tittle="Figma"
            />

            <SkillCard
                IconName="simple-icons:reactrouter"
                Tittle="React Router"
            />

        </div>
    );
}

export default SkillsCards;

