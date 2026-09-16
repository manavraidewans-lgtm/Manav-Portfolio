import Description from "./Hero/Description";
import HeroHead from "./Hero/HeroHead";
import LinksBatch from "./Hero/LinksBatch";
import Name_Des from "./Hero/Name_Des";
import SwingPhoto from "./Hero/SwingPhoto";

function Hero() {
    return (
        <div className="h-[92vh] w-full flex flex-col gap-1 md:flex-row justify-center items-center p-2">

            {/* LEFT */}
            <div className="h-[45%] w-[90%] p-4 flex flex-col gap-4 md:p-8 md:h-[90%] md:w-[50%] md:gap-16">

                <HeroHead
                    Head={"hello, i'm"}
                />

                <Name_Des />

                <Description />

                <LinksBatch />

            </div>

            {/* RIGHT */}
            <div className="h-[45%] w-[90%] md:h-[90%] md:w-[45%] p-8 flex justify-center items-center">

                <SwingPhoto />

            </div>

        </div>
    );
}

export default Hero;
