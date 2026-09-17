
import { useState } from "react";

function ProjectCard({
    Image,
    Tittle,
    Description,
    Stack,
    LiveLink,
    CodeLink,
}) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div
            className={`
                w-full
                min-w-0
                ${showMore ? "h-[85vh] md:h-[85vh]" : "h-[68vh] md:h-[72vh]"}
                bg-[#f2f1ee]
                border-3
                border-[#dedede]
                rounded-xl
                p-1
                md:p-3
                overflow-hidden
                flex
                flex-col
                gap-4
                transition-all
                duration-500
                ease-in-out
            `}
        >

            {/* Project Image */}
            <div
                className="
                    h-[40%]
                    w-full
                    flex
                    justify-start
                    items-start
                    shrink-0
                "
            >
                <img
                    className="
                        w-full
                        h-full
                        object-contain
                        md:object-cover
                        rounded-xl
                        block
                    "
                    src={Image}
                    alt={Tittle || "portfolio cover"}
                />
            </div>


            {/* Project Information */}
            <div
                className="
                    w-full
                    flex
                    flex-col
                    gap-3
                    p-3
                    md:p-5
                    flex-1
                    min-h-0
                "
            >

                {/* Title */}
                <h1
                    className="
                        text-2xl
                        md:text-3xl
                        font-semibold
                        text-[#454545]
                        shrink-0
                    "
                >
                    {Tittle || "Coming Soon"}
                </h1>


                {/* Description */}
                <div className="w-full">

                    <p
                        className={`
                            text-sm
                            md:text-base
                            text-[#777]
                            leading-relaxed
                            transition-all
                            duration-300
                            ${!showMore ? "line-clamp-2" : ""}
                        `}
                    >
                        {Description ||
                            "This project is currently in progress. More details will be available soon."}
                    </p>


                    {/* Read More / Read Less */}
                    {Description && (
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="
                                mt-2
                                text-sm
                                font-medium
                                text-[#91725d]
                                hover:text-[#6f5747]
                                transition-colors
                            "
                        >
                            {showMore ? "Read Less" : "Read More"}
                        </button>
                    )}

                </div>


                {/* Tech Stack */}
                <div
                    className="
                        w-full
                        flex
                        flex-wrap
                        justify-start
                        items-center
                        gap-2
                    "
                >
                    {Stack?.map((tech, index) => (
                        <span
                            key={index}
                            className="
                                px-3
                                py-1
                                border
                                border-[#cfcac5]
                                rounded-full
                                text-xs
                                md:text-sm
                                text-[#6d625a]
                                bg-[#ebe9e5]
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>


                {/* Project Links */}
                <div
                    className="
                        w-full
                        flex
                        justify-between
                        items-center
                        gap-5
                        mt-auto
                        pt-2
                    "
                >

                    {/* Go Live */}
                    {LiveLink && (
                        <a
                            href={LiveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                md:text-base
                                font-medium
                                text-[#91725d]
                                hover:text-[#6f5747]
                                transition-colors
                            "
                        >
                            <i className="ri-external-link-line text-lg"></i>
                            <span>Go Live</span>
                        </a>
                    )}


                    {/* Show Code */}
                    {CodeLink && (
                        <a
                            href={CodeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                md:text-base
                                font-medium
                                text-[#91725d]
                                hover:text-[#6f5747]
                                transition-colors
                            "
                        >
                            <i className="ri-github-fill text-lg"></i>
                            <span>Show Code</span>
                        </a>
                    )}

                </div>

            </div>

        </div>
    );
}

export default ProjectCard;
