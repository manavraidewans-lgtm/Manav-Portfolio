
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
                x: -80,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            animation.scrollTrigger?.kill();
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

