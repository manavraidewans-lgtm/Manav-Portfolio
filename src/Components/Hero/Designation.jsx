
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Designation({ Des }) {

    const designationRef = useRef(null);

    useEffect(() => {

        const element = designationRef.current;

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

            // Coming back: LEFT → CENTER
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
        <h2
            ref={designationRef}
            className="text-[#a68c77] font-medium text-2xl md:text-4xl"
        >
            {Des}
        </h2>
    );
}

export default Designation;

