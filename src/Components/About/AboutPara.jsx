
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutContent from "./AboutContent";

gsap.registerPlugin(ScrollTrigger);

function AboutPara() {

    const contentRef = useRef(null);

    useEffect(() => {

        const contents = contentRef.current.children;

        const animations = [];

        Array.from(contents).forEach((content, index) => {

            // Even = LEFT
            // Odd = RIGHT
            const enterX = index % 2 === 0 ? -100 : 100;
            const exitX = index % 2 === 0 ? 100 : -100;

            // ENTER ANIMATION
            const animation = gsap.fromTo(
                content,
                {
                    x: enterX,
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

            // SCROLL TRIGGER
            const trigger = ScrollTrigger.create({
                trigger: content,
                start: "top 85%",
                end: "bottom 15%",

                // Coming into screen from top
                onEnter: () => {
                    animation.restart();
                },

                // Going out downward
                onLeave: () => {
                    gsap.to(content, {
                        x: exitX,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.in",
                    });
                },

                // Coming back from bottom
                onEnterBack: () => {
                    animation.restart();
                },

                // Going out upward
                onLeaveBack: () => {
                    gsap.to(content, {
                        x: enterX,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.in",
                    });
                },
            });

            animations.push({
                animation,
                trigger,
            });

        });

        return () => {

            animations.forEach(({ animation, trigger }) => {
                trigger.kill();
                animation.kill();
            });

        };

    }, []);

    return (
        <div
            ref={contentRef}
            className="h-full w-full flex flex-col gap-2.5 mt-2 md:mt-8 md:gap-7"
        >

            {/* FirstLine → LEFT */}
            <AboutContent
                Content={
                    "I'm Manav Rai Dewan, a front end developer who loves turning ideas into real, interactive experiences."
                }
            />

            {/* SecondLine → RIGHT */}
            <AboutContent
                Content={
                    "I enjoy building clean, simple and beautiful web applications that are fast, accessible and user-friendly."
                }
            />

            {/* ThirdLine → LEFT */}
            <AboutContent
                Content={
                    "I'm always curious, always learning and always looking for ways to improve one line of code at a time."
                }
            />

        </div>
    );
}

export default AboutPara;

