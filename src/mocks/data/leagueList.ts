import premier_league_logo from "../../assets/images/premier_league.svg";
import la_liga from "../../assets/images/laliga.svg";
import ligue_1 from "../../assets/images/ligue-1.svg";
import bundesliga_logo from "../../assets/images/bundesliga.svg";
import champions from "../../assets/images/champions_league.svg";
import europa_league from "../../assets/images/europa_league.svg";
import libertadores from "../../assets/images/conmebol-libertadores.svg";
import brasileiro from "../../assets/images/brasileiro.svg";
import copa_do_brasil from "../../assets/images/copa-do-brasil.svg";
import styles from "../../styles/GlobalLeagueStyles.module.css";

export type LeagueList = {
  id: string
  name: string
  displayName: string
  logo: string
  current: boolean
  styleClass: string
}

export const laegueList:  readonly LeagueList[] = [
  {
    id: "39",
    name: "premier_league",
    displayName: "Premier League",
    logo: premier_league_logo,
    current: true,
    styleClass: styles.premier_league_border,
  },
  {
    id: "140",
    name: "la_liga",
    displayName: "La Liga",
    logo: la_liga,
    current: true,
    styleClass: styles.la_liga,
  },
  {
    id: "61",
    name: "ligue_1",
    displayName: "Ligue 1",
    logo: ligue_1,
    current: true,
    styleClass: styles.ligue_1,
  },
  {
    id: "82",
    name: "bundesliga",
    displayName: "Bundesliga",
    logo: bundesliga_logo,
    current: true,
    styleClass: styles.bundesliga_border,
  },
  {
    id: "2",
    name: "champions_league",
    displayName: "Champions League",
    logo: champions,
    current: true,
    styleClass: styles.champions_league,
  },
  {
    id: "3",
    name: "europa_league",
    displayName: "Europa League",
    logo: europa_league,
    current: true,
    styleClass: styles.europa_league,
  },
  {
    id: "13",
    name: "libertadores",
    displayName: "Libertadores (em breve)",
    logo: libertadores,
    current: false,
    styleClass: styles.brasileiro,
  },
  {
    id: "740",
    name: "brasileiro",
    displayName: "Brasileirão (em breve)",
    logo: brasileiro,
    current: false,
    styleClass: styles.brasileiro,
  },
  {
    id: "617",
    name: "copa_do_brasil",
    displayName: "Copa do Brasil",
    logo: copa_do_brasil,
    current: true,
    styleClass: styles.copa_do_brasil,
  },
] as const;