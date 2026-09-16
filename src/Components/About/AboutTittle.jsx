import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutTittle({ Tittle }) {

    const titleRef = useRef(null);

    useEffect(() => {

        const animation = gsap.fromTo(
            titleRef.current,
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                paused: true,
            }
        );

        const trigger = ScrollTrigger.create({
            trigger: titleRef.current,

            // Your content viewport is around 91vh
            start: "top 75%",
            end: "bottom 20%",

            onEnter: () => {
                animation.restart();
            },

            onLeave: () => {
                gsap.to(titleRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 2,
                    ease: "power3.in",
                });
            },

            onEnterBack: () => {
                animation.restart();
            },

            onLeaveBack: () => {
                gsap.to(titleRef.current, {
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
            ref={titleRef}
            className="text-[#4b4d4d] text-4xl md:text-6xl font-medium"
        >
            {Tittle}
        </h1>
    );
}

export default AboutTittle;