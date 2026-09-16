
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DetailsDetails from "./DetailsDetails";
import DetailsTittle from "./DetailsTittle";
import Icons from "./Icons";

gsap.registerPlugin(ScrollTrigger);

function ContactDetails() {
    const detailsRef = useRef(null);

    useEffect(() => {
        const rows = detailsRef.current.children;

        const triggers = [];

        Array.from(rows).forEach((row, index) => {
            const direction = index % 2 === 0 ? -100 : 100;

            const trigger = ScrollTrigger.create({
                trigger: row,
                start: "top 90%",
                end: "bottom 15%",

                // Enter
                onEnter: () => {
                    gsap.fromTo(
                        row,
                        {
                            x: direction,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.out",
                        }
                    );
                },

                // Exit
                onLeave: () => {
                    gsap.to(row, {
                        x: -direction,
                        opacity: 0,
                        duration: 1.6,
                        ease: "power3.in",
                    });
                },

                // Enter again
                onEnterBack: () => {
                    gsap.fromTo(
                        row,
                        {
                            x: direction,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1.8,
                            ease: "power3.out",
                        }
                    );
                },

                // Exit upward
                onLeaveBack: () => {
                    gsap.to(row, {
                        x: direction,
                        opacity: 0,
                        duration: 1.6,
                        ease: "power3.in",
                    });
                },
            });

            triggers.push(trigger);
        });

        return () => {
            triggers.forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={detailsRef}
            className="h-[23vh] w-full flex flex-col gap-2 md:gap-7 md:mt-19 md:h-[35vh]"
        >

            {/* EMAIL */}
            <div className="h-[30%] w-full md:h-[30%] flex justify-evenly items-center">

                <div className="h-full w-[20%] md:w-[15%] flex justify-center items-center">
                    <Icons icon={"ri-mail-send-line"} />
                </div>

                <div className="h-full w-[80%] md:w-[85%] flex flex-col justify-center items-start">

                    <DetailsTittle
                        Tittle={"Email"}
                    />

                    <DetailsDetails
                        Details={"manavraidewans@Gmail.com"}
                    />

                </div>

            </div>

            {/* PHONE */}
            <div className="h-[30%] w-full md:h-[30%] flex justify-evenly items-center">

                <div className="h-full w-[20%] md:w-[15%] flex justify-center items-center">
                    <Icons icon={"ri-phone-line"} />
                </div>

                <div className="h-full w-[80%] md:w-[85%] flex flex-col justify-center items-start">

                    <DetailsTittle
                        Tittle={"phone"}
                    />

                    <DetailsDetails
                        Details={"+91 8218647096"}
                    />

                </div>

            </div>

            {/* LOCATION */}
            <div className="h-[30%] w-full md:h-[30%] flex justify-evenly items-center">

                <div className="h-full w-[20%] md:w-[15%] flex justify-center items-center">
                    <Icons icon={"ri-map-pin-line"} />
                </div>

                <div className="h-full w-[80%] md:w-[85%] flex flex-col justify-center items-start">

                    <DetailsTittle
                        Tittle={"Location"}
                    />

                    <DetailsDetails
                        Details={"Dehradun, Uttarkahand"}
                    />

                </div>

            </div>

        </div>
    );
}

export default ContactDetails;

