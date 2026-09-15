
import { useRef, useState } from "react";
import gsap from "gsap";

function Form() {
    const paths = useRef([]);
    const buttonRef = useRef(null);

    const [status, setStatus] = useState("idle");

    // -----------------------------
    // BORDER ANIMATION
    // -----------------------------
    const handleFocus = (index) => {
        // Stop all other border animations
        paths.current.forEach((path, i) => {
            if (path && i !== index) {
                gsap.killTweensOf(path);

                gsap.set(path, {
                    opacity: 0,
                    strokeDashoffset: 0,
                });
            }
        });

        const path = paths.current[index];

        if (!path) return;

        // Show active border
        gsap.killTweensOf(path);

        gsap.set(path, {
            opacity: 1,
            strokeDashoffset: 0,
        });

        // Animate only the active border
        gsap.to(path, {
            strokeDashoffset: -1000,
            duration: 2.5,
            repeat: -1,
            ease: "none",
        });
    };

    // -----------------------------
    // WHEN INPUT LOSES FOCUS
    // -----------------------------
    const handleBlur = (index) => {
        const path = paths.current[index];

        if (!path) return;

        gsap.killTweensOf(path);

        gsap.to(path, {
            opacity: 0,
            duration: 0.2,
        });
    };

    // -----------------------------
    // FORM SUBMIT
    // -----------------------------
    const handleSubmit = (e) => {
        e.preventDefault();

        if (status !== "idle") return;

        const form = e.target;

        // Check required fields
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const button = buttonRef.current;

        // Stop all border animations
        paths.current.forEach((path) => {
            if (path) {
                gsap.killTweensOf(path);

                gsap.to(path, {
                    opacity: 0,
                    duration: 0.2,
                });
            }
        });

        // -----------------------------
        // SENDING
        // -----------------------------
        setStatus("sending");

        gsap.fromTo(
            button,
            {
                scale: 1,
            },
            {
                scale: 0.96,
                duration: 0.15,
                yoyo: true,
                repeat: 1,
                ease: "power2.out",
            }
        );

        // -----------------------------
        // SENT AFTER 1 SECOND
        // -----------------------------
        setTimeout(() => {
            setStatus("sent");

            gsap.fromTo(
                button,
                {
                    scale: 0.9,
                },
                {
                    scale: 1,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                }
            );
        }, 1000);

        // -----------------------------
        // RESET AFTER 2 SECONDS
        // -----------------------------
        setTimeout(() => {
            setStatus("idle");
            form.reset();
        }, 2000);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="h-[45vh] w-[70%] md:h-[90%] flex flex-col gap-2.5 justify-center items-center md:gap-5"
        >

            {/* ================= NAME ================= */}
            <div className="relative w-full">

                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    onFocus={() => handleFocus(0)}
                    onBlur={() => handleBlur(0)}
                    className="w-full h-[52px] md:h-[60px] bg-[#f6f5f3] border border-gray-300 rounded-xl p-2.5 pl-4 outline-none md:p-4"
                />

                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                >
                    <rect
                        ref={(el) => (paths.current[0] = el)}
                        x="1"
                        y="1"
                        width="98"
                        height="38"
                        rx="4"
                        fill="none"
                        stroke="#a38671"
                        strokeWidth="1.5"
                        pathLength="1000"
                        strokeDasharray="80 920"
                        strokeDashoffset="0"
                        opacity="0"
                    />
                </svg>

            </div>


            {/* ================= EMAIL ================= */}
            <div className="relative w-full">

                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    onFocus={() => handleFocus(1)}
                    onBlur={() => handleBlur(1)}
                    className="w-full h-[52px] md:h-[60px] bg-[#f6f5f3] border border-gray-300 rounded-xl p-2.5 pl-4 outline-none md:p-4"
                />

                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                >
                    <rect
                        ref={(el) => (paths.current[1] = el)}
                        x="1"
                        y="1"
                        width="98"
                        height="38"
                        rx="4"
                        fill="none"
                        stroke="#a38671"
                        strokeWidth="1.5"
                        pathLength="1000"
                        strokeDasharray="80 920"
                        strokeDashoffset="0"
                        opacity="0"
                    />
                </svg>

            </div>


            {/* ================= PHONE ================= */}
            <div className="relative w-full">

                <input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    required
                    onFocus={() => handleFocus(2)}
                    onBlur={() => handleBlur(2)}
                    className="w-full h-[52px] md:h-[60px] bg-[#f6f5f3] border border-gray-300 rounded-xl p-2.5 pl-4 outline-none md:p-4"
                />

                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                >
                    <rect
                        ref={(el) => (paths.current[2] = el)}
                        x="1"
                        y="1"
                        width="98"
                        height="38"
                        rx="4"
                        fill="none"
                        stroke="#a38671"
                        strokeWidth="1.5"
                        pathLength="1000"
                        strokeDasharray="80 920"
                        strokeDashoffset="0"
                        opacity="0"
                    />
                </svg>

            </div>


            {/* ================= MESSAGE ================= */}
            <div className="relative w-full">

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    onFocus={() => handleFocus(3)}
                    onBlur={() => handleBlur(3)}
                    className="w-full h-24 md:h-32 bg-[#f6f5f3] border border-gray-300 rounded-xl p-2.5 pl-4 resize-none outline-none md:p-4"
                />

                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                >
                    <rect
                        ref={(el) => (paths.current[3] = el)}
                        x="1"
                        y="1"
                        width="98"
                        height="38"
                        rx="4"
                        fill="none"
                        stroke="#a38671"
                        strokeWidth="1.5"
                        pathLength="1000"
                        strokeDasharray="80 920"
                        strokeDashoffset="0"
                        opacity="0"
                    />
                </svg>

            </div>


            {/* ================= BUTTON ================= */}
            <button
                ref={buttonRef}
                type="submit"
                disabled={status !== "idle"}
                className={`w-[80%] md:w-[50%] border border-[#a38671] rounded-xl p-2.5 md:p-3 flex justify-center items-center gap-2 transition-all duration-300 ${
                    status === "sent"
                        ? "bg-[#a38671] text-white"
                        : "hover:bg-[#a38671] hover:text-white"
                }`}
            >

                {status === "idle" && (
                    <>
                        Send Message
                    </>
                )}

                {status === "sending" && (
                    <>
                        Sending...
                    </>
                )}

                {status === "sent" && (
                    <>
                        Sent
                        <i className="ri-check-line text-xl"></i>
                    </>
                )}

            </button>

        </form>
    );
}

export default Form;

