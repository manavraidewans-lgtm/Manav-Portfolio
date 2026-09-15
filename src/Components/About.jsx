import AboutHead from "./About/AboutHead";
import AboutPara from "./About/AboutPara";
import AboutTittle from "./About/AboutTittle";
import Signature from "./About/Signature";
import AboutImage from "../assets/About Image.png"


function About() {
    return (
        <div className="h-[92vh] w-full flex flex-col gap-5 md:flex-row justify-center items-center p-2 ">

            {/* Left */}
            <div className="h-[65%] w-[90%] p-4 flex flex-col gap-4 md:p-8 md:h-[95%] md:w-[60%] md:gap-10 ">

                <AboutHead
                    Head={"ABOUT ME"}
                />

                <AboutTittle
                Tittle={"More Than JustCode - It's a Mindset."}
                />

                <AboutPara/>

                <Signature/>

            </div>

            {/* Right */}
            <div className="h-[40%] w-[90%] md:h-[90%] md:w-[35%] flex justify-center items-center bg-blue-400 overflow-hidden rounded-2xl shadow-[40px_35px_60px_rgba(0,0,0,0.25)] cursor-not-allowed">
                <img src={AboutImage} alt="" className="h-full w-full" />
            </div>

        </div>
    );
}

export default About;