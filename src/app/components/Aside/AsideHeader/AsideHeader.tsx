import { variables } from "../../../../../variables";
import Image from "next/image";
import styles from "./styles.module.css";

export const AsideHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile_img_wrapper}>
        <Image
          width={90}
          className={styles.profile_img}
          height={90}
          src={variables.profileImg}
          alt="Profile image"
          priority
        />
      </div>
      <a href={variables.linkedin} target="_blank" className={styles.name}>
        Leonardo Agostini Costa
      </a>
      <span className={styles.job_description}>Desenvolvedor Front-end</span>
    </div>
  );
};
