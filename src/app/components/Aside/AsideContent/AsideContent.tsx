"use client";
import { useCountup } from "app/hooks/useCountup";
import styles from "./styles.module.css";

export const AsideContent = () => {
  const { counter } = useCountup({
    start: 0,
    target: 100,
    timeInSecondsToTarget: 1,
  });

  return (
    <div className={styles.container}>
      <ul className={styles.person_info_list}>
        <li className={styles.person_info_item}>
          <h6>Estado</h6>
          <span>SC</span>
        </li>
        <li className={styles.person_info_item}>
          <h6>Cidade</h6>
          <span>Chapecó</span>
        </li>
        <li className={styles.person_info_item}>
          <h6>Idade</h6>
          <span>
            {new Date().getFullYear() - new Date("08/10/2002").getFullYear()}
          </span>
        </li>

        <div className={styles.divider} />

        {counter}
      </ul>
    </div>
  );
};
