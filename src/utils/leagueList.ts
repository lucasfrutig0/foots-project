import premier_league_logo from "../assets/images/premier_league.svg";
import la_liga from "../assets/images/laliga.svg";
import ligue_1 from "../assets/images/ligue-1.svg";
import bundesliga_logo from "../assets/images/bundesliga.svg";
import champions from "../assets/images/champions_league.svg";
import europa_league from "../assets/images/europa_league.svg";
import libertadores from "../assets/images/conmebol-libertadores.svg";
import brasileiro from "../assets/images/brasileiro.svg";
import copa_do_brasil from "../assets/images/copa-do-brasil.svg";

export type LeagueList = {
  id: string
  name: string
  displayName: string
  logo: string
  active: boolean
}

export const laegueList:  readonly LeagueList[] = [
  {
    id: "39",
    name: "premier_league",
    displayName: "Premier League",
    logo: premier_league_logo,
    active: true
  },
  {
    id: "13",
    name: "la_liga",
    displayName: "La Liga",
    logo: la_liga,
    active: true
  },
  {
    id: "13",
    name: "ligue_1",
    displayName: "Ligue 1",
    logo: ligue_1,
    active: true
  },
  {
    id: "13",
    name: "bundesliga",
    displayName: "Bundesliga",
    logo: bundesliga_logo,
    active: true
  },
  {
    id: "13",
    name: "champions_league",
    displayName: "Champions League",
    logo: champions,
    active: true
  },
  {
    id: "13",
    name: "europa_league",
    displayName: "Europa League",
    logo: europa_league,
    active: true
  },
  {
    id: "13",
    name: "libertadores",
    displayName: "Libertadores (em breve)",
    logo: libertadores,
    active: false
  },
  {
    id: "13",
    name: "brasileiro",
    displayName: "Brasileirão (em breve)",
    logo: brasileiro,
    active: false
  },
  {
    id: "13",
    name: "copa_do_brasil",
    displayName: "Copa do Brasil",
    logo: copa_do_brasil,
    active: true
  },
] as const;