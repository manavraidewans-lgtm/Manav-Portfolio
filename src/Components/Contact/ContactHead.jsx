function ContactHead({ Head }) {
    return (
        <h1 className="text-[#a29a93] font-bold font-['Inter'] text-s md:text-xl">
            {Head.toUpperCase()}
        </h1>
    );
}

export default ContactHead;