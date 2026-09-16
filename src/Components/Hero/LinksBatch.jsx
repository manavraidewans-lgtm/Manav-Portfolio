
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Links from "./Links";

gsap.registerPlugin(ScrollTrigger);

function LinksBatch() {

    const linksRef = useRef(null);

    useEffect(() => {

        const element = linksRef.current;

        const trigger = ScrollTrigger.create({
            trigger: element,

            start: "top 85%",
            end: "bottom 15%",

            // Enter: LEFT → CENTER
            onEnter: () => {
                gsap.fromTo(
                    element.children,
                    {
                        x: -60,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "power3.out",
                    }
                );
            },

            // Exit: CENTER → RIGHT
            onLeave: () => {
                gsap.to(element.children, {
                    x: 60,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.in",
                });
            },

            // Come back: LEFT → CENTER
            onEnterBack: () => {
                gsap.fromTo(
                    element.children,
                    {
                        x: -60,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "power3.out",
                    }
                );
            },

            // Exit upward: CENTER → LEFT
            onLeaveBack: () => {
                gsap.to(element.children, {
                    x: -60,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.in",
                });
            },
        });

        return () => {
            trigger.kill();
        };

    }, []);

    return (
        <div
            ref={linksRef}
            className="w-full flex flex-row justify-start items-center gap-7 text-[#515454] font-bold text-xl md:w-[60%] md:gap-11 md:font-medium md:text-3xl"
        >

            {/* Github */}
            <Links
                link="https://github.com/manavraidewans-lgtm"
                icon="ri-github-fill"
            />

            {/* Linkedin */}
            <Links
                link="https://www.linkedin.com/in/manav-rai-dewan-46823a38a/"
                icon="ri-linkedin-fill"
            />

            {/* Gmail */}
            <Links
                link="mailto:manavraidewans@Gmail.com"
                icon="ri-mail-line"
            />

            {/* Instagram */}
            <Links
                link="https://www.instagram.com/dewanmanavv/?hl=en"
                icon="ri-instagram-line"
            />

        </div>
    );
}

export default LinksBatch;

