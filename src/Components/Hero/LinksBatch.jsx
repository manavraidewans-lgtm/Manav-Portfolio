import Links from "./Links";

function LinksBatch() {
    return (
        <div className="w-full flex flex-row justify-start items-center gap-7 text-[#515454] font-bold text-xl md:w-[60%] md:gap-11 md:font-medium md:text-3xl ">

            {/* Github */}
            <Links
                link="https://github.com/manavraidewans-lgtm"
                icon="ri-github-fill"
            />

            {/* Linkedin */}
            <Links
                link="https://www.linkedin.com/in/manav-rai-dewan-46823a38a/"
                icon="ri-linkedin-fill"
            />

            {/* Gmail */}
            <Links
                link="mailto:manavraidewans@Gmail.com"
                icon="ri-mail-line"
            />

            {/* InstaGram */}
            <Links
                link="https://www.instagram.com/dewanmanavv/?hl=en"
                icon="ri-instagram-line"
            />

        </div>
    );
}

export default LinksBatch;