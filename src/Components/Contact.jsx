import ContactDescription from "./Contact/ContactDescription"
import ContactDetails from "./Contact/ContactDetails"
import ContactHead from "./Contact/ContactHead"
import ContactTittle from "./Contact/ContactTittle"
import Form from "./Contact/Form"

function Contact () {
    return (
        <div className="h-[95vh] w-full flex flex-col gap-5 md:flex-row justify-center items-center p-2">

            {/* Left */}
            <div className="h-[58%] w-[90%] p-4 flex flex-col gap-4 md:p-8 md:h-[90%] md:w-[50%] md:gap-7 ">

            <ContactHead
            Head={"GET IN TOUCH"}
            />

            <ContactTittle
            Tittle={"Let's Work Together"}
            />

            <ContactDescription
            Des={"Interested in working together or discussing a front-end opportunity?  I’d be happy to hear from you."}
            />

            <ContactDetails/>

            </div>

            {/* Right */}
            <div className="h-full w-[90%]  md:h-[90%] md:w-[45%] p-8 flex justify-center items-center ">
                <Form/>
            </div>

        </div>
    )
}

export default Contact