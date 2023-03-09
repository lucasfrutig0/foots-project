import playerPic from "../../assets/images/mbappe.png";

interface CardTopScoreProps {
  playerPic: string;
  name: string;
  score: number;
  team: string;
}

export const CardTopScore = () => {
  return (
    <div
      className="
      snap-start 
      dark:bg-nord-polar-night-900 
      bg-nord-snow-storm-500
      rounded-xl
      mt-2 py-4 flex items-center space-y-0 space-x-6
      hover:cursor-pointer
      hover:outline outline-1 outline-nord-frost-blue
    "
    >
      <img
        className="block h-24 rounded-full mx-0 shrink-0 ml-2"
        src={playerPic}
        alt="Mbappe"
      />
      <div className="space-y-2 text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-nord-frost-dark-blue font-semibold">
            Kylyan Mbappe
          </p>
          <p className="text-slate-500 font-medium">PSG</p>
        </div>
        10 Gols
      </div>
    </div>
  );
};
