
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutHead from "./About/AboutHead";
import AboutPara from "./About/AboutPara";
import AboutTittle from "./About/AboutTittle";
import Signature from "./About/Signature";
import AboutImage from "../assets/About Image.png";

gsap.registerPlugin(ScrollTrigger);

function About() {

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            // LEFT CONTENT
            gsap.fromTo(
                leftRef.current,
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftRef.current,
                        start: "top 80%",
                        end: "bottom 20%",

                        onEnter: () => {
                            gsap.to(leftRef.current, {
                                x: 0,
                                opacity: 1,
                                duration: 0.8,
                                ease: "power3.out",
                            });
                        },

                        onLeave: () => {
                            gsap.to(leftRef.current, {
                                x: 100,
                                opacity: 0,
                                duration: 0.8,
                                ease: "power3.in",
                            });
                        },

                        onEnterBack: () => {
                            gsap.to(leftRef.current, {
                                x: 0,
                                opacity: 1,
                                duration: 0.8,
                                ease: "power3.out",
                            });
                        },

                        onLeaveBack: () => {
                            gsap.to(leftRef.current, {
                                x: -100,
                                opacity: 0,
                                duration: 0.8,
                                ease: "power3.in",
                            });
                        },
                    },
                }
            );

            // IMAGE → RIGHT TO CENTER
            gsap.fromTo(
                rightRef.current,
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rightRef.current,
                        start: "top 80%",
                        end: "bottom 20%",

                        // Entering from TOP
                        onEnter: () => {
                            gsap.to(rightRef.current, {
                                x: 0,
                                opacity: 1,
                                duration: 0.9,
                                ease: "power3.out",
                            });
                        },

                        // Leaving while scrolling DOWN
                        // CENTER → RIGHT
                        onLeave: () => {
                            gsap.to(rightRef.current, {
                                x: 100,
                                opacity: 0,
                                duration: 0.8,
                                ease: "power3.in",
                            });
                        },

                        // Coming back from BELOW
                        // RIGHT → CENTER
                        onEnterBack: () => {
                            gsap.to(rightRef.current, {
                                x: 0,
                                opacity: 1,
                                duration: 0.9,
                                ease: "power3.out",
                            });
                        },

                        // Leaving while scrolling UP
                        // CENTER → RIGHT
                        onLeaveBack: () => {
                            gsap.to(rightRef.current, {
                                x: 100,
                                opacity: 0,
                                duration: 0.8,
                                ease: "power3.in",
                            });
                        },
                    },
                }
            );

        });

        return () => ctx.revert();

    }, []);

    return (
        <div className="h-[92vh] w-full flex flex-col gap-5 md:flex-row justify-center items-center p-2">

            {/* LEFT */}
            <div
                ref={leftRef}
                className="h-[65%] w-[90%] p-4 flex flex-col gap-4 md:p-8 md:h-[95%] md:w-[60%] md:gap-10"
            >

                <AboutHead
                    Head={"ABOUT ME"}
                />

                <AboutTittle
                    Tittle={"More Than JustCode - It's a Mindset."}
                />

                <AboutPara />

                <Signature />

            </div>

            {/* RIGHT */}
            <div
                ref={rightRef}
                className="h-[40%] w-[90%] md:h-[90%] md:w-[35%] flex justify-center items-center bg-blue-400 overflow-hidden rounded-2xl shadow-[40px_35px_60px_rgba(0,0,0,0.25)] cursor-not-allowed"
            >

                <img
                    src={AboutImage}
                    alt=""
                    className="h-full w-full"
                />

            </div>

        </div>
    );
}

export default About;

