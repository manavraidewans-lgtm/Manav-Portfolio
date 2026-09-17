
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectHead({ Head }) {
   const headRef = useRef(null);

    useEffect(() => {
        const element = headRef.current;

        const trigger = ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",

            // Enter: Right → Center
            onEnter: () => {
                gsap.fromTo(
                    element,
                    {
                        x: 100,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    }
                );
            },

            // Exit: Center → Left
            onLeave: () => {
                gsap.to(element, {
                    x: -100,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.in",
                });
            },

            // Coming back: Right → Center
            onEnterBack: () => {
                gsap.fromTo(
                    element,
                    {
                        x: 100,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    }
                );
            },

            // Leaving upward: Center → Right
            onLeaveBack: () => {
                gsap.to(element, {
                    x: 100,
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
            className="text-[#a29a93] font-bold font-['Inter'] text-sm md:text-xl"
        >
            {Head.toUpperCase()}
        </h1>
    );
}

export default ProjectHead;
