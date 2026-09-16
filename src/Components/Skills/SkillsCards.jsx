
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger);

function SkillsCards() {

    const cardsRef = useRef(null);

    useEffect(() => {

        const cards = Array.from(cardsRef.current.children);

        const directions = [
            { x: -100, y: 0 },  // LEFT
            { x: 100, y: 0 },   // RIGHT
            { x: 0, y: 100 },   // BOTTOM
            { x: 0, y: -100 },  // TOP
        ];

        const triggers = [];

        cards.forEach((card, index) => {

            const direction = directions[index % directions.length];

            // Initial position
            gsap.set(card, {
                x: direction.x,
                y: direction.y,
                opacity: 0,
            });

            const trigger = ScrollTrigger.create({

                trigger: card,

                

                // =================================
                // SCROLL DOWN → ENTER
                // =================================
                onEnter: () => {

                    gsap.killTweensOf(card);

                    gsap.fromTo(
                        card,
                        {
                            x: direction.x,
                            y: direction.y,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.out",
                        }
                    );
                },

                // =================================
                // SCROLL DOWN → EXIT
                // =================================
                onLeave: () => {

                    gsap.killTweensOf(card);

                    gsap.to(card, {
                        x: direction.x,
                        y: direction.y,
                        opacity: 0,
                        duration: 1.5,
                        ease: "power3.in",
                    });
                },

                // =================================
                // SCROLL UP → ENTER
                // =================================
                onEnterBack: () => {

                    gsap.killTweensOf(card);

                    gsap.fromTo(
                        card,
                        {
                            x: direction.x,
                            y: direction.y,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.out",
                        }
                    );
                },

                // =================================
                // SCROLL UP → EXIT
                // =================================
                onLeaveBack: () => {

                    gsap.killTweensOf(card);

                    gsap.to(card, {
                        x: direction.x,
                        y: direction.y,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.in",
                    });
                },
            });

            triggers.push(trigger);
        });

        return () => {

            triggers.forEach((trigger) => {
                trigger.kill();
            });

            gsap.killTweensOf(cards);
        };

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

