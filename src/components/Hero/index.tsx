import { useColorLeague } from "../../hooks/useColorLeague";
import styles from "./Hero.module.css";

export const Hero = () => {
  const league = useColorLeague();
  console.log(" adasddsa", league);
  return (
    <section className={`${styles.hero} h-32`}>
      <div className={styles.hero_flex}>
        <img
          src={league.logo}
          alt=""
          className={`bg-nord-snow-storm-100 w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500`}
        />
        <div className="flex flex-col">
          <small className="uppercase">competição</small>
          <h1 className={`text-2xl md:text-4xl font-black uppercase`}>
            {league.displayName}
          </h1>
        </div>
      </div>
    </section>
  );
};
