import { useStore } from "@nanostores/react";
import { selectedLeague } from "../store/leagueStore";
import { laegueList } from "../mocks/data/leagueList";

export const useColorLeague = () => {
  const $league = useStore(selectedLeague);
  const leagueToShow = laegueList.filter((league) => league.id === $league);

  return leagueToShow[0]
}