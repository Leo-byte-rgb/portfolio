"use client";
import { FiDownload } from "react-icons/fi";
import styles from "./styles.module.css";

const SkillData = ({
  description,
  percentage,
}: {
  description: string;
  percentage: number;
}) => (
  <li>
    <div className={styles.skill_data}>
      <h6>{description}</h6>
      <span>{percentage}%</span>
    </div>
    <div
      className={styles.skill_progress_wrapper}
      style={{ maxWidth: `${percentage}%` }}
    >
      <div className={styles.progress} />
    </div>
  </li>
);

export const AsideContent = () => {
  const skills = [
    { description: "Javascript", percentage: 100 },
    { description: "React", percentage: 90 },
    { description: "CSS", percentage: 85 },
    { description: "HTML", percentage: 80 },
  ];

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
      </ul>

      <div className={styles.divider} />

      <ul className={styles.skills_wrapper}>
        {skills.map((s) => (
          <SkillData {...s} key={s.description} />
        ))}
      </ul>

      <div className={styles.divider} />

      <ul className={styles.skills_wrapper}>
        <li className={styles.skill_item}>
          <div className={styles.checkmark} />{" "}
          <span>Javascript, React, React Native</span>
        </li>
        <li className={styles.skill_item}>
          <div className={styles.checkmark} />{" "}
          <span>HTML, CSS, CSS-IN-JS, SCSS</span>
        </li>
        <li className={styles.skill_item}>
          <div className={styles.checkmark} />{" "}
          <span>Ant design, Material UI, Tailwind</span>
        </li>
        <li className={styles.skill_item}>
          <div className={styles.checkmark} /> <span>Git, Gitflow</span>
        </li>
      </ul>

      <div className={styles.divider} />

          <a href="" className={styles.download_cv}>
            Baixar currículo 
            <FiDownload />
          </a>

    </div>
  );
};
