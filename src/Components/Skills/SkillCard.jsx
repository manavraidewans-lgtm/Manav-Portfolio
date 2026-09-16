
import { Icon } from "@iconify/react";

function SkillCard({ IconName, Tittle }) {
    return (
        <div
            className="
                group
                h-35 w-35 md:h-50 md:w-45
                flex flex-col p-2 gap-2
                cursor-pointer
                transition-all duration-500 ease-out
                hover:-translate-y-3
            "
        >

            {/* Icon Box */}
            <div
                className="
                    h-[85%] w-full
                    flex justify-center items-center
                    transition-all duration-500 ease-out
                    group-hover:border-[#6f513e]
                    group-hover:bg-[#896b57]/5
                    group-hover:shadow-[0_15px_35px_rgba(137,107,87,0.18)]
                "
            >

                <Icon
                    icon={IconName}
                    className="
                        text-6xl font-bold
                        transition-all duration-500 ease-out
                        group-hover:scale-125
                        group-hover:-rotate-3
                        group-hover:drop-shadow-[0_5px_8px_rgba(137,107,87,0.25)]
                    "
                    style={{
                        color: "#896b57",
                    }}
                />

            </div>

            {/* Title */}
            <h2
                className="
                    text-center
                    font-medium
                    font-['Inter']
                    text-[#484848]
                    text-[0.95rem] md:text-xl
                    transition-all duration-500 ease-out
                    group-hover:text-[#896b57]
                    group-hover:tracking-wide
                "
            >
                {Tittle}
            </h2>

        </div>
    );
}

export default SkillCard;

