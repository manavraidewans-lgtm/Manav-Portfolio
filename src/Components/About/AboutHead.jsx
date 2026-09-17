import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutHead({ Head }) {

    const headRef = useRef(null);

    useEffect(() => {

        const animation = gsap.fromTo(
            headRef.current,
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                paused: true,
            }
        );

        const trigger = ScrollTrigger.create({
            trigger: headRef.current,

            // Your content viewport is around 91vh
            start: "top 85%",
            end: "bottom 10%",

            onEnter: () => {
                animation.restart();
            },

            onLeave: () => {
                gsap.to(headRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.in",
                });
            },

            onEnterBack: () => {
                animation.restart();
            },

            onLeaveBack: () => {
                gsap.to(headRef.current, {
                    x: -100,
                    opacity: 0,
                    duration: 1,
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

export default AboutHead;