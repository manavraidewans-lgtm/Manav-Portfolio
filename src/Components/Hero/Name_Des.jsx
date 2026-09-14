import Designation from "./Designation"
import MyName from "./MyName"

function Name_Des () {
    
    return (

        <>
            <div className="h-auto font-['Playfair_Display'] flex flex-col gap-1 md:gap-4">

                <MyName
                Name={"Manav Rai Dewan"}
                />

                <Designation
                Des={"Front End Developer"}
                />

            </div>
        </>

    )

}

export default Name_Des