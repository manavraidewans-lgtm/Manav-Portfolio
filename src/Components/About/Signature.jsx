import Sign from "../../assets/Signature.png"

function Signature () {
    return (
        <div className="h-[25%] w-[70%] hidden md:flex justify-center items-center">
            <img src={Sign} alt="" className="h-full w-full"/>
        </div>
    )
}

export default Signature