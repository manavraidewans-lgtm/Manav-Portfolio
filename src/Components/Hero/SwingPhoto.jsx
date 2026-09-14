
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Photo from "../../assets/my pic.jpg";

function SwingPhoto() {
    const swingRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                swingRef.current,
                {
                    rotation: 5,
                },
                {
                    rotation: -5,
                    duration: 1.8,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                }
            );
        }, swingRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="flex w-full justify-center">
            
            {/* Hanging Object */}
            <div
                ref={swingRef}
                className=" relative origin-top w-[58vw] max-w-55 xs:w-[55vw] sm:w-[45vw] sm:max-w-62.5 md:w-70 md:max-w-none lg:w-77.5 xl:w-85 2xl:w-92.5"
            >

            {/* Nail */}
            <div
                className=" absolute left-1/2 top-0 z-30 -translate-x-1/2 rounded-full bg-[#292929] shadow-[0_2px_5px_rgba(0,0,0,0.3)] h-1.75  w-1.75 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 xl:h-3.5 xl:w-3.5"
            />

            {/* Rope */}
            <div
                className=" absolute left-1/2 top-1.75 z-10 -translate-x-1/2 bg-[#777] w-0.5 h-[calc(14vw+4px)] sm:top-2 sm:h-17.5 md:top-2.5 md:h-20.5 lg:top-3 lg:h-23.75 xl:top-3.5 xl:h-27 2xl:h-30"
            />

            {/* Photo */}
            <div
                className=" relative pt-[calc(14vw+4px)] sm:pt-17.5 md:pt-20.5 lg:pt-23.75 xl:pt-27 2xl:pt-30"
            >

            {/* Photo Frame */}
                <div
                    className=" relative rounded-xl bg-[#faf9f7] p-1.25 shadow-[0_18px_35px_rgba(0,0,0,0.20),0_5px_10px_rgba(0,0,0,0.10)] sm:p-1.5 md:p-1.75 lg:p-2 xl:p-2.25"
                >


            {/* Inner Border */}
                <div
                    className=" overflow-hidden rounded-xl border border-[#d8d5d0] bg-[#eee]"
                >

                <img
                    src={Photo}
                    alt="Manav Rai Dewan"
                    className="block aspect-4/5 w-full object-cover object-center"
                />

                    </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default SwingPhoto;
