import { ChangeEvent, useId, useState } from "react";
import { laegueList } from "../../utils/leagueList";

export const SelectLeague = () => {
  const leagueId = useId();
  const [selectedLeague, setSelectedLeague] = useState("premier_league");
  const leagueToShow = laegueList.filter(
    (league) => league.name === selectedLeague
  );

  function onHandleChangeLeague(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedLeague(e.target.value);
  }

  return (
    <div className="flex items-center dark:bg-nord-polar-night-500 dark:text-nord-snow-storm-100">
      <div className=" bg-nord-snow-storm-100 w-12">
        <img
          className="p-1 w-12 h-12 rounded"
          src={leagueToShow[0].logo ?? selectedLeague}
          alt={leagueToShow[0].name}
        />
      </div>
      <form>
        <label htmlFor={leagueId} />
        <select
          autoFocus
          name="league"
          id={leagueId}
          value={selectedLeague}
          title="Choose a League"
          onChange={onHandleChangeLeague}
          className="h-12 dark:bg-nord-polar-night-700 dark:text-nord-snow-storm-100"
        >
          {laegueList.map((league) => (
            <option key={league.name} value={league.name}>
              {league.displayName}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
