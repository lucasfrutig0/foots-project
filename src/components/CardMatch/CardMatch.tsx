import { useStore } from "@nanostores/react";
import { useColorLeague } from "../../hooks/useColorLeague";
import { selectedLeague } from "../../store/leagueStore";
import styles from "../../styles/GlobalLeagueStyles.module.css";
const borderColorLeague = [
  {
    id: "39",
    styleClass: styles.premier_league_border,
  },
  {
    id: "82",
    styleClass: styles.bundesliga_border,
  },
  {
    id: "2",
    styleClass: styles.champions_league,
  },
  {
    id: "3",
    styleClass: styles.europa_league,
  },
  {
    id: "140",
    styleClass: styles.la_liga,
  },
  {
    id: "61",
    styleClass: styles.ligue_1,
  },
  {
    id: "13",
    styleClass: styles.liberta,
  },
  {
    id: "740",
    styleClass: styles.brasileiro,
  },
  {
    id: "617",
    styleClass: styles.ligue_1,
  },
];

type CardMatchProps = {
  children: React.ReactNode;
};

export const CardMatch = ({ children }: CardMatchProps) => {
  const borderColorLeague = useColorLeague();

  return <div className="mt-2"></div>;
};
