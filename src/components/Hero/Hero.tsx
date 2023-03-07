import { useColorLeague } from "../../hooks/useColorLeague";
import styles from "./Hero.module.css";
import logo from "../../assets/images/premier_league.svg";

export const Hero = () => {
  const league = useColorLeague();
  return (
    <section
      className={`${styles.hero} ${
        styles[league.name]
      } px-4 h-32 overflow-hidden flex items-center justify-between`}
    >
      <h1 className={`text-4xl md:text-6xl font-black lowercase`}>
        {league.displayName}
      </h1>
      <img src={league.logo} alt="" className={styles.hero_img} />
    </section>
  );
};
