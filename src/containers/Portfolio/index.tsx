import { memo, useContext } from "react";
import styles from "./style.module.scss";

import { HeightContext } from "../../contexts/heigths";

import { FaGithub, FaCoffee, FaRegClock } from "react-icons/fa";

interface IPortfolioProps {
  coffeCups: number;
  repositories: number;
  workedHours: number;
}

const Portfolio = ({
  coffeCups,
  repositories,
  workedHours,
}: IPortfolioProps) => {
  const { position, state } = useContext(HeightContext);

  const countUpRender = state.contact - state.resume;
  const positionToRender = (countUpRender + state.contact) / 2.15;

  return (
    <section id={styles.portfolioUI}>
      <div id={styles.list}>
        <div className={styles.item}>
          <FaGithub />
          {position > positionToRender && (
            <span className={styles.counter}>{repositories.toFixed(0)}</span>
          )}
          <span>Repositórios no Github</span>
        </div>
        <div className={styles.item}>
          <FaCoffee />
          {position > positionToRender && (
            <span className={styles.counter}>{coffeCups.toFixed(0)}</span>
          )}
          <span>Xícaras De Café</span>
        </div>
        <div className={styles.item}>
          <FaRegClock />
          {position > positionToRender && (
            <span className={styles.counter}>{workedHours.toFixed(0)}</span>
          )}
          <span>Horas Trabalhadas</span>
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
