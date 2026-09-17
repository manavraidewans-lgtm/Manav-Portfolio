import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";

import MyPortfolio1 from "../../assets/My-Portfolio.jpeg";
import ComingSoon from "../../assets/ChatGPT Image Sep 16, 2026, 08_12_33 PM.png";
import Finora from "../../assets/Finora.png"

gsap.registerPlugin(ScrollTrigger);

function ProjectStack() {

    const sliderRef = useRef(null);
    const cardsRef = useRef([]);

    const [currentPage, setCurrentPage] = useState(0);
    const currentPageRef = useRef(0);

    const directions = [
        { x: -100, y: 0 },  // Card 1 → LEFT
        { x: 100, y: 0 },   // Card 2 → RIGHT
        { x: 0, y: -100 },  // Card 3 → TOP
        { x: -100, y: 0 },  // Card 4 → LEFT
        { x: 100, y: 0 },   // Card 5 → RIGHT
    ];



    // ==========================================
    // VERTICAL SCROLL ANIMATION
    // ==========================================

    useEffect(() => {

        const cards = cardsRef.current;
        const triggers = [];

        cards.forEach((card, index) => {

            if (!card) return;

            const direction = directions[index % directions.length];

            const trigger = ScrollTrigger.create({
                trigger: card,

                end: "bottom top",

                // ENTER
                onEnter: () => {

                    gsap.fromTo(
                        card,
                        {
                            x: direction.x,
                            y: direction.y,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            duration: 2.8,
                            ease: "power3.out",
                        }
                    );

                },

                // EXIT DOWN
                onLeave: () => {

                    gsap.to(card, {
                        x: direction.x * -1,
                        y: direction.y * -1,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.in",
                    });

                },

                // ENTER BACK
                onEnterBack: () => {

                    gsap.fromTo(
                        card,
                        {
                            x: direction.x,
                            y: direction.y,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            duration: 1.8,
                            ease: "power3.out",
                        }
                    );

                },

                // EXIT UP
                onLeaveBack: () => {

                    gsap.to(card, {
                        x: direction.x,
                        y: direction.y,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.in",
                    });

                },
            });

            triggers.push(trigger);
        });


        return () => {

            triggers.forEach((trigger) => {
                trigger.kill();
            });

        };

    }, []);



    // ==========================================
    // HORIZONTAL PAGE CHANGE
    // ==========================================

    const handleScroll = () => {

        const slider = sliderRef.current;

        if (!slider) return;

        const page = Math.round(
            slider.scrollLeft / slider.clientWidth
        );

        const previousPage = currentPageRef.current;

        if (page === previousPage) return;

        // Update page
        currentPageRef.current = page;
        setCurrentPage(page);



        // ==========================================
        // OLD PAGE → EXIT
        // ==========================================

        const oldStartIndex = previousPage * 3;

        const oldPageCards = cardsRef.current.slice(
            oldStartIndex,
            oldStartIndex + 3
        );


        oldPageCards.forEach((card, index) => {

            if (!card) return;

            const cardIndex =
                oldStartIndex + index;

            const direction =
                directions[cardIndex % directions.length];


            gsap.to(card, {
                x: direction.x * -1,
                y: direction.y * -1,
                opacity: 0,
                duration: 0.7,
                delay: index * 0.08,
                ease: "power3.in",
            });

        });



        // ==========================================
        // NEW PAGE → ENTER
        // ==========================================

        const newStartIndex = page * 3;

        const newPageCards = cardsRef.current.slice(
            newStartIndex,
            newStartIndex + 3
        );


        newPageCards.forEach((card, index) => {

            if (!card) return;

            const cardIndex =
                newStartIndex + index;

            const direction =
                directions[cardIndex % directions.length];


            gsap.fromTo(
                card,
                {
                    x: direction.x,
                    y: direction.y,
                    opacity: 0,
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 2.2,
                    delay: index * 0.15,
                    ease: "power3.out",
                }
            );

        });

    };



    // ==========================================
    // DOT NAVIGATION
    // ==========================================

    const goToPage = (page) => {

        const slider = sliderRef.current;

        if (!slider) return;

        slider.scrollTo({
            left: slider.clientWidth * page,
            behavior: "smooth",
        });

    };



    return (
        <div className="w-full py-6 md:py-10">

            <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="
                    w-full
                    overflow-x-auto
                    overflow-y-hidden
                    snap-x
                    snap-mandatory
                    scrollbar-hide
                "
            >

                <div className="flex w-full">


                    {/* ================= PAGE 1 ================= */}

                    <div
                        className="
                            w-full
                            min-w-full
                            shrink-0
                            snap-start
                            box-border
                            px-4
                            sm:px-6
                            md:px-8
                        "
                    >

                        <div
                            className="
                                w-full
                                grid
                                grid-cols-1
                                md:grid-cols-3
                                gap-5
                                md:gap-6
                            "
                        >


                            {/* CARD 1 */}

                            <div
                                ref={(el) => {
                                    cardsRef.current[1] = el;
                                }}
                            >

                                <ProjectCard
                                    Image={Finora}
                                    Tittle={"Finora - (Comming Soon)"}
                                    Description={"A modern personal finance dashboard for tracking expenses, managing budgets and savings goals, and visualizing financial activity through interactive analytics."}
                                    Stack={[
                                        "Local Storage",
                                        "React",
                                        "Tailwind",
                                        "Recharts",
                                    ]}
                                    
                                    
                                />
                                

                            </div>



                            {/* CARD 2 */}

                            <div
                                ref={(el) => {
                                    cardsRef.current[0] = el;
                                }}
                            >

                                <ProjectCard
                                    Image={MyPortfolio1}
                                    Tittle={"Personal Portfolio"}
                                    Description={
                                        "A responsive personal portfolio designed to showcase my work, skills, and front-end development journey with smooth interactions and modern UI."
                                    }
                                    Stack={[
                                        "React",
                                        "Tailwind",
                                        "GSAP",
                                        "React Router"
                                    ]}
                                    LiveLink={"ada"}
                                    CodeLink={
                                        "https://github.com/manavraidewans-lgtm/Manav-Portfolio"
                                    }
                                />

                            </div>



                            



                            {/* CARD 3 */}

                            <div
                                ref={(el) => {
                                    cardsRef.current[2] = el;
                                }}
                            >

                                <ProjectCard
                                    Image={ComingSoon}
                                />

                            </div>


                        </div>

                    </div>



                    {/* ================= PAGE 2 ================= */}

                    <div
                        className="
                            w-full
                            min-w-full
                            shrink-0
                            snap-start
                            box-border
                            px-4
                            sm:px-6
                            md:px-8
                        "
                    >

                        <div
                            className="
                                w-full
                                grid
                                grid-cols-1
                                md:grid-cols-3
                                gap-5
                                md:gap-6
                            "
                        >


                            {/* CARD 4 */}

                            <div
                                ref={(el) => {
                                    cardsRef.current[3] = el;
                                }}
                            >

                                <ProjectCard
                                    Image={ComingSoon}
                                />

                            </div>



                            {/* CARD 5 */}

                            <div
                                ref={(el) => {
                                    cardsRef.current[4] = el;
                                }}
                            >

                                <ProjectCard
                                    Image={ComingSoon}
                                />

                            </div>


                        </div>

                    </div>

                </div>

            </div>



            {/* ================= DOTS ================= */}

            <div
                className="
                    flex
                    justify-center
                    items-center
                    gap-3
                    mt-8
                "
            >

                {[0, 1].map((page) => (

                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`
                            rounded-full
                            transition-all
                            duration-300
                            ${
                                currentPage === page
                                    ? "w-3 h-3 bg-[#454545]"
                                    : "w-2.5 h-2.5 bg-[#c8c5c1]"
                            }
                        `}
                    />

                ))}

            </div>

        </div>
    );
}

export default ProjectStack;