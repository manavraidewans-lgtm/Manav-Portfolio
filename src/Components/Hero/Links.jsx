
function Links({ link, icon }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#b39c8a] transition-all duration-350 hover:-translate-y-1"
        >
            <i className={icon}></i>
        </a>
    );
}

export default Links;

