import Logo from "../assets/Logo.png";

function FlashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 bg-[#f6f5f3] px-4">

      {/* LOGO */}
      <div className="flex items-center justify-center">
        <img
          src={Logo}
          alt="Logo"
          className="
            h-28 w-28
            sm:h-36 sm:w-36
            md:h-48 md:w-48
            lg:h-56 lg:w-56
            xl:h-64 xl:w-64
            object-contain
          "
        />
      </div>

      {/* NAME & ROLE */}
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 text-center">

        <h1
          className="
            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            font-bold
            text-[#454545]
            whitespace-nowrap
          "
        >
          M A N A V &nbsp;&nbsp; R A I &nbsp;&nbsp; D E W A N
        </h1>

        <h3
          className="
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            font-medium
            text-[#a7a6a5]
          "
        >
          FRONT &nbsp;&nbsp; END &nbsp;&nbsp; DEVELOPER
        </h3>

      </div>

      {/* LOADING BAR */}
      <div className="flex w-full max-w-xs sm:max-w-sm md:max-w-md flex-col items-center justify-center gap-4 sm:gap-5">

        {/* Loading Bar */}
        <div className="h-1 w-full overflow-hidden bg-[#d8d5d2]">

          <div className="h-full w-0 bg-[#987b6a] animate-loading-bar" />

        </div>

        {/* Loading Text */}
        <h2
          className="
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            font-bold
            text-[#a7a6a5]
            tracking-tightest
          "
        >
          LOADING &nbsp; EXPERIENCE...
        </h2>

      </div>

    </div>
  );
}

export default FlashScreen;