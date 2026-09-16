
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactTittle({ Tittle }) {
    const titleRef = useRef(null);

    useEffect(() => {
        const element = titleRef.current;

        const trigger = ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",

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
                        duration: 2,
                        ease: "power3.out",
                    }
                );
            },

            onLeave: () => {
                gsap.to(element, {
                    x: 100,
                    opacity: 0,
                    duration: 2,
                    ease: "power3.in",
                });
            },

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
                        duration: 2,
                        ease: "power3.out",
                    }
                );
            },

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
            ref={titleRef}
            className="text-[#4b4d4d] text-4xl md:text-6xl font-medium"
        >
            {Tittle}
        </h1>
    );
}

export default ContactTittle;

