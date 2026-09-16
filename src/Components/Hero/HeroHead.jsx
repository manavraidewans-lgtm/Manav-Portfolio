
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroHead({ Head }) {

    const headRef = useRef(null);

    useEffect(() => {

        const element = headRef.current;

        const trigger = ScrollTrigger.create({
            trigger: element,

            start: "top 85%",
            end: "bottom 15%",

            // Enter: LEFT → CENTER
            onEnter: () => {
                gsap.fromTo(
                    element,
                    {
                        x: -100,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    }
                );
            },

            // Exit: CENTER → RIGHT
            onLeave: () => {
                gsap.to(element, {
                    x: 100,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.in",
                });
            },

            // Coming back: RIGHT → CENTER
            onEnterBack: () => {
                gsap.fromTo(
                    element,
                    {
                        x: -100,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    }
                );
            },

            // Exit upward: CENTER → LEFT
            onLeaveBack: () => {
                gsap.to(element, {
                    x: -100,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.in",
                });
            },
        });

        return () => {
            trigger.kill();
        };

    }, []);

    return (
        <h1
            ref={headRef}
            className="text-[#a29a93] font-bold font-['Inter']"
        >
            {Head.toUpperCase()}
        </h1>
    );
}

export default HeroHead;


