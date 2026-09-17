
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SkillsDescirption({ Des }) {

    const descriptionRef = useRef(null);

    useEffect(() => {
        const element = descriptionRef.current;

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
                        duration: 0.8,
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
                        duration: 0.8,
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
        <p
            ref={descriptionRef}
            className="font-['Inter'] text-[#484848] text-[0.95rem] w-[85%] md:text-xl md:w-[70%] font-medium"
        >
            {Des}
        </p>
    );
}

export default SkillsDescirption;

