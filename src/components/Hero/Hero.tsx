import { useColorLeague } from "../../hooks/useColorLeague";
import styles from "./Hero.module.css";

export const Hero = () => {
  const league = useColorLeague();
  return (
    <section className="col-span-full">
      <h1 className={`text-6xl font-black lowercase`}>{league.displayName}</h1>
      <img src={league.logo} alt="logo" className={styles.hero} />
    </section>
  );
};
