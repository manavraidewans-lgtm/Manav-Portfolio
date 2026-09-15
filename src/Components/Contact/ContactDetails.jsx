import DetailsDetails from "./DetailsDetails"
import DetailsTittle from "./DetailsTittle"
import Icons from "./Icons"

function ContactDetails () {
    return (

        <div className="h-[23vh] w-full flex flex-col gap-2 md:gap-7 md:mt-19 md:h-[35vh] ">

                <div className="h-[30%] w-full  md:h-[30%] flex justify-evenly items-center">

                    <left className = "h-full w-[20%]  md:w-[15%] flex justify-center items-center">
                            <Icons
                            icon={"ri-mail-send-line"}
                            />
                    </left>

                    <right className = "h-full w-[80%]  md:w-[85%] flex flex-col justify-center items-start" >

                            <DetailsTittle
                            Tittle={"Email"}
                            />

                            <DetailsDetails
                            Details={"manavraidewans@Gmail.com"}
                            />

                    </right>

                </div>
                

                <div className="h-[30%] w-full  md:h-[30%] flex justify-evenly items-center">

                    <left className = "h-full w-[20%]  md:w-[15%] flex justify-center items-center">
                            <Icons
                            icon={"ri-phone-line"}
                            />
                    </left>

                    <right className = "h-full w-[80%]  md:w-[85%] flex flex-col justify-center items-start" >

                            <DetailsTittle
                            Tittle={"phone"}
                            />

                            <DetailsDetails
                            Details={"+91 8218647096"}
                            />

                    </right>

                </div>


                <div className="h-[30%] w-full  md:h-[30%] flex justify-evenly items-center">

                    <left className = "h-full w-[20%]  md:w-[15%] flex justify-center items-center">
                            <Icons
                            icon={"ri-map-pin-line"}
                            />
                    </left>

                    <right className = "h-full w-[80%]  md:w-[85%] flex flex-col justify-center items-start" >

                            <DetailsTittle
                            Tittle={"Location"}
                            />

                            <DetailsDetails
                            Details={"Dehradun, Uttarkahand"}
                            />

                    </right>
                </div>
                
        </div>
    )
}

export default ContactDetails