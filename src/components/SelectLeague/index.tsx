import { useStore } from "@nanostores/react";
import { ChangeEvent, useId } from "react";

import { laegueList } from "../../mocks/data/leagueList";
import { requestOptions } from "../../utils/requestOptions";
import { selectedLeague } from "../../store/leagueStore";

export const SelectLeague = () => {
  const leagueId = useId();
  const $league = useStore(selectedLeague);
  // const [selectedLeague, setSelectedLeague] = useLocalStorage("league", "39");
  const leagueToShow = laegueList.filter((league) => league.id === $league);

  function onHandleChangeLeague(e: ChangeEvent<HTMLSelectElement>) {
    selectedLeague.set(e.target.value);
    // setSelectedLeague(e.target.value);
    // fetch(
    //   `https://v3.football.api-sports.io/leagues?current=${true}&id=${
    //     e.target.value
    //   }`,
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  }
  console.log("selected", selectedLeague);
  console.log("asdsada", leagueToShow);

  return (
    <div className="px-4 w-1/4">
      <form className="focus-within:outline outline-1 outline-nord-frost-blue ">
        <label htmlFor={leagueId} />
        <select
          autoFocus
          name="league"
          id={leagueId}
          value={$league}
          title="Choose a League"
          onChange={onHandleChangeLeague}
          className="h-12 w-full px-2 dark:bg-gray-900 dark:text-nord-snow-storm-100"
        >
          {laegueList.map((league) => (
            <option
              key={league.id}
              value={league.id}
              disabled={!league.current}
            >
              {league.displayName}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
