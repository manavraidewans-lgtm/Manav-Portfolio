import AboutContent from "./AboutContent"

function AboutPara () {
    return (
        <div className="h-full w-full flex flex-col gap-2.5 mt-2 md:mt-8 md:gap-7 ">

            {/* FirstLine */}
            <AboutContent
                Content={"I'm Manav Rai Dewan, a front end developer who loves turning ideas into real, interactive experiences."}
            />

            {/* SecondLine */}
            <AboutContent
                Content={"I enjoy building clean, simple and beautiful web applications that are fast, accessible and user-friendly."}
            />

            {/* ThirdLine */}
            <AboutContent
                Content={"I'm always curious, always learning and always looking for ways to improve  one line of code at a time."}
            />

        </div>
    )
}

export default AboutPara