
import SkillsCards from "./Skills/SkillsCards";
import SkillsDescirption from "./Skills/SkillsDescription";
import SkillsHead from "./Skills/SkillsHead";
import SkillsTittle from "./Skills/SkillsTittle";

function Skills() {
    return (
        <div
            className="min-h-[92vh] w-full flex flex-col justify-start items-start gap-5 p-6 sm:p-8 md:p-9 md:pl-14 md:gap-12"
        >

            <SkillsHead
                Head={"MY SKILLS"}
            />

            <SkillsTittle
                Tittle={"Technologies I Work With"}
            />

            <SkillsDescirption
                Des={
                    "I focus on the front-end stack and enjoy building modern, responsive and performant web applications."
                }
            />

            <SkillsCards />

        </div>
    );
}

export default Skills;

