"use client";

import { useCountup } from "../../hooks/useCountup";
import styles from "./styles.module.css";

const DATE_THAT_I_STARTED_IN_WORK = 2019;
const EXPERIENCE_YEARS = new Date().getFullYear() - DATE_THAT_I_STARTED_IN_WORK;
const COFFE_CUPS = EXPERIENCE_YEARS * 365;
const WORKED_HOURS = EXPERIENCE_YEARS * 240 * 8;

export const Header = () => {
  const { counter: yearsInWork } = useCountup({
    start: 0,
    target: EXPERIENCE_YEARS,
    timeInSecondsToTarget: 1,
  });
  const { counter: repoCounter } = useCountup({
    start: 0,
    target: 20,
    timeInSecondsToTarget: 1,
  });

  const { counter: coffeCounter } = useCountup({
    start: COFFE_CUPS - 100,
    target: COFFE_CUPS,
    timeInSecondsToTarget: 1,
  });

  const { counter: workedHoursCounter } = useCountup({
    start: WORKED_HOURS - 100,
    target: WORKED_HOURS,
    timeInSecondsToTarget: 1,
  });

  return (
    <header id={styles.header}>
      <div className={styles.counter_wrapper}>
        <span className={styles.counter}>{yearsInWork}</span>
        <span className={styles.counter_plus}>+</span>
        <span className={styles.counter_description}>Anos de experiência</span>
      </div>
      <div className={styles.counter_wrapper}>
        <span className={styles.counter}>{workedHoursCounter}</span>
        <span className={styles.counter_plus}>+</span>
        <span className={styles.counter_description}>Horas trabalhadas</span>
      </div>
      <div className={styles.counter_wrapper}>
        <span className={styles.counter}>{coffeCounter}</span>
        <span className={styles.counter_plus}>+</span>
        <span className={styles.counter_description}>Xícaras de café</span>
      </div>
      <div className={styles.counter_wrapper}>
        <span className={styles.counter}>{repoCounter}</span>
        <span className={styles.counter_plus}>+</span>
        <span className={styles.counter_description}>Projetos no github</span>
      </div>
    </header>
  );
};
