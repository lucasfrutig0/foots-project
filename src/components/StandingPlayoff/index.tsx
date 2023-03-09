import munLogo from "../../assets/images/mun_logo.png";

export const StandingPlayoff = () => {
  return (
    <div
      className="
      shadow-lg
      transition ease-in-out delay-150
      bg-nord-polar-night-900
      w-full text-xs
      py-4 px-6 rounded-md"
    >
      <div>
        <small className="block text-center uppercase">agregado (1 x 0)</small>
        <div className="grid grid-cols-3 place-items-center">
          <div className="px-2 flex justify-center items-center gap-4 uppercase font-bold">
            <img src={munLogo} alt="logo" width="28px" height="28px" />
            <span className="flex-1">Manchester United</span>
            <span>0</span>
          </div>

          <div className="uppercase">x</div>

          <div className="flex justify-center items-center gap-4 uppercase font-bold">
            <span>0</span>
            <span>Manchester United</span>
            <img src={munLogo} alt="logo" width="28px" height="28px" />
          </div>
        </div>
      </div>
    </div>
  );
};
