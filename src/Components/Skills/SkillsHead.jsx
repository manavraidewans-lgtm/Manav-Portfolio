
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SkillsHead({ Head }) {

    const headRef = useRef(null);

    useEffect(() => {

        const animation = gsap.fromTo(
            headRef.current,
            {
                x: -80,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                paused: true,
            }
        );

        const trigger = ScrollTrigger.create({
            trigger: headRef.current,

            // Navbar is 8vh, so start below it
            start: "top 85%",
            end: "bottom 8vh",

            onEnter: () => {
                animation.restart();
            },

            // Scrolling down → center to RIGHT
            onLeave: () => {
                gsap.to(headRef.current, {
                    x: 80,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.in",
                });
            },

            // Coming back → LEFT to center
            onEnterBack: () => {
                animation.restart();
            },

            // Scrolling up → center to LEFT
            onLeaveBack: () => {
                gsap.to(headRef.current, {
                    x: -80,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.in",
                });
            },
        });

        return () => {
            trigger.kill();
            animation.kill();
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

export default SkillsHead;

