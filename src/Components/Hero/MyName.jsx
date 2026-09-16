
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MyName({ Name }) {

    const nameRef = useRef(null);

    useEffect(() => {

        const element = nameRef.current;

        const trigger = ScrollTrigger.create({
            trigger: element,

            start: "top 85%",
            end: "bottom 15%",

            // Enter: RIGHT → CENTER
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
                        duration: 5,
                        ease: "power3.out",
                    }
                );
            },

            // Exit: CENTER → LEFT
            onLeave: () => {
                gsap.to(element, {
                    x: -100,
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
                        x: 100,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    }
                );
            },

            // Exit upward: CENTER → RIGHT
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
            ref={nameRef}
            className="text-[#4b4d4d] text-4xl md:text-7xl font-medium"
        >
            {Name}
        </h1>
    );
}

export default MyName;


