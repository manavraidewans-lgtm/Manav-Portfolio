
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SkillsTittle({ Tittle }) {

    const titleRef = useRef(null);

    useEffect(() => {

        const title = titleRef.current;

        // Start hidden on the RIGHT
        gsap.set(title, {
            x: 80,
            opacity: 0,
        });

        // -----------------------------
        // ENTER FROM TOP
        // RIGHT → CENTER
        // -----------------------------
        const enterTrigger = ScrollTrigger.create({
            trigger: title,
            start: "top 85%",

            onEnter: () => {

                gsap.killTweensOf(title);

                gsap.fromTo(
                    title,
                    {
                        x: 80,
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

            // Coming back UP into the section
            // RIGHT → CENTER
            onEnterBack: () => {

                gsap.killTweensOf(title);

                gsap.fromTo(
                    title,
                    {
                        x: 80,
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
        });


        // -----------------------------
        // LEAVE TO BOTTOM
        // CENTER → LEFT
        // -----------------------------
        const leaveBottomTrigger = ScrollTrigger.create({
            trigger: title,
            start: "bottom 8vh",

            onLeave: () => {

                gsap.killTweensOf(title);

                gsap.to(title, {
                    x: -80,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.in",
                });
            },

            // Scrolling UP back into the visible area
            // LEFT → CENTER
            onEnterBack: () => {

                gsap.killTweensOf(title);

                gsap.fromTo(
                    title,
                    {
                        x: -80,
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
        });


        // -----------------------------
        // LEAVE TO TOP
        // CENTER → RIGHT
        // -----------------------------
        const leaveTopTrigger = ScrollTrigger.create({
            trigger: title,
            start: "top 8vh",

            onLeave: () => {

                gsap.killTweensOf(title);

                gsap.to(title, {
                    x: 80,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.in",
                });
            },

            // Scrolling DOWN back into the visible area
            // RIGHT → CENTER
            onEnterBack: () => {

                gsap.killTweensOf(title);

                gsap.fromTo(
                    title,
                    {
                        x: 80,
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
        });


        return () => {
            enterTrigger.kill();
            leaveBottomTrigger.kill();
            leaveTopTrigger.kill();

            gsap.killTweensOf(title);
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

export default SkillsTittle;

