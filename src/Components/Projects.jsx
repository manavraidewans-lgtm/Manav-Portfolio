import ProjectDescription from "./Projects/ProjectDescription"
import ProjectHead from "./Projects/ProjectHead"
import ProjectStack from "./Projects/ProjectStack"
import ProjectTittle from "./Projects/ProjectTittle"

function Projects () {

    return (

        <div className="min-h-[92vh] w-screen flex flex-col justify-start items-start gap-5 p-6 sm:p-8 md:w-screen md:p-9 md:gap-7">

            <ProjectHead
            Head={"MY PROJECTS"}
            />

            <ProjectTittle
            Tittle={"Featured Work"}
            />

            <ProjectDescription
            Des={"A selection of projects I've built each focused on clean code, great design and smooth user experiences."}
            />

            <ProjectStack/>

        </div>
    )
}

export default Projects