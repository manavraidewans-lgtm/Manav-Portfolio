
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SkillsDescirption({ Des }) {

    const descriptionRef = useRef(null);

    useEffect(() => {

        const description = descriptionRef.current;

        // Start hidden on the RIGHT
        gsap.set(description, {
            x: 100,
            opacity: 0,
        });

        const trigger = ScrollTrigger.create({

            trigger: description,

            // Visible area starts below navbar
            start: "top 85%",

            // Visible area ends before navbar
            end: "bottom 8vh",

            // =========================
            // SCROLL DOWN → ENTER
            // RIGHT → CENTER
            // =========================
            onEnter: () => {

                gsap.killTweensOf(description);

                gsap.fromTo(
                    description,
                    {
                        x: 100,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                    }
                );
            },

            // =========================
            // SCROLL DOWN → EXIT
            // CENTER → RIGHT
            // =========================
            onLeave: () => {

                gsap.killTweensOf(description);

                gsap.to(description, {
                    x: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.in",
                });
            },

            // =========================
            // SCROLL UP → ENTER
            // RIGHT → CENTER
            // =========================
            onEnterBack: () => {

                gsap.killTweensOf(description);

                gsap.fromTo(
                    description,
                    {
                        x: 100,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                    }
                );
            },

            // =========================
            // SCROLL UP → EXIT
            // CENTER → RIGHT
            // =========================
            onLeaveBack: () => {

                gsap.killTweensOf(description);

                gsap.to(description, {
                    x: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.in",
                });
            },
        });

        return () => {
            trigger.kill();
            gsap.killTweensOf(description);
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

