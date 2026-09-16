
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sign from "../../assets/Signature.png";

gsap.registerPlugin(ScrollTrigger);

function Signature() {
    const signRef = useRef(null);

    useEffect(() => {
        const animation = gsap.fromTo(
            signRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 3,
                ease: "power2.out",
                paused: true,
            }
        );

        const trigger = ScrollTrigger.create({
            trigger: signRef.current,
            start: "top 85%",
            end: "bottom 15%",

            onEnter: () => {
                animation.restart();
            },

            onLeave: () => {
                gsap.to(signRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.in",
                });
            },

            onEnterBack: () => {
                animation.restart();
            },

            onLeaveBack: () => {
                gsap.to(signRef.current, {
                    opacity: 0,
                    duration: 2,
                    ease: "power2.in",
                });
            },
        });

        return () => {
            trigger.kill();
            animation.kill();
        };
    }, []);

    return (
        <div
            ref={signRef}
            className="h-[25%] w-[70%] hidden md:flex justify-center items-center"
        >
            <img
                src={Sign}
                alt=""
                className="h-full w-full"
            />
        </div>
    );
}

export default Signature;

