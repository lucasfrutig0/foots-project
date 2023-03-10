import playerPic from "../../assets/images/mbappe.png";

interface CardTopScoreProps {
  playerPic: string;
  name: string;
  score: number;
  team: string;
}

export const CardTop = () => {
  return (
    <div className="bg-gray-800 rounded py-6 shadow-nord-frost-green">
      <h3 className="px-4 pb-4 text-md uppercase text-nord-frost-green font-semibold">
        Artilheiro
      </h3>
      <div className="flex justify-around items-start">
        <div>
          <p className="text-lg font-black leading-loose">Kylian Mbappe</p>
          <p className="text-md semibold">PSG</p>
          <p className="text-3xl font-bold mt-2">10</p>
        </div>
        <img src={playerPic} alt="" width="80px" />
      </div>
    </div>
  );
};
