import munLogo from "../../assets/images/mun_logo.png";

export const CardMatchOfDay = () => {
  return (
    <div
      className="
      mb-4
      shadow-lg
      transition ease-in-out delay-150
      bg-nord-polar-night-900
      w-full text-xs grid grid-cols-3 divide-x 
      py-4 px-6 rounded-md
      hover:cursor-pointer
      hover:bg-gradient-to-br from-nord-frost-dark-blue to-nord-polar-night-900
    "
    >
      <div className="col-span-2 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <img src={munLogo} alt="mun logo" width="18px" height="18px" />
            <span className="font-black">Manchester United</span>
          </div>
          <span className="font-black px-2">0</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <img src={munLogo} alt="mun logo" width="18px" height="18px" />
            <span className="font-black">Manchester United</span>
          </div>
          <span className="font-black px-2">0</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <span className="font-semibold">10/03/2023</span>
        <span className="font-semibold">às 17:00h</span>
      </div>
    </div>
  );
};
