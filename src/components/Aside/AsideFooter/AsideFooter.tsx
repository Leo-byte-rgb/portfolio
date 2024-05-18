import styles from "./styles.module.css";
import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
import { variables } from "../../../../variables";

export const AsideFooter = () => {
  return (
    <div className={styles.container}>
      <a
        href={variables.linkedin}
        title="linkedin"
        aria-label="linkedin link"
        target="_blank"
        className={styles.link}
      >
        <FiLinkedin />
      </a>

      <a
        href={variables.instagram}
        title="instagram"
        aria-label="instagram link"
        target="_blank"
        className={styles.link}
      >
        <FiInstagram />
      </a>

      <a
        href={variables.github}
        title="github"
        aria-label="github link"
        target="_blank"
        className={styles.link}
      >
        <FiGithub />
      </a>

      <a
        href={variables.wpp}
        title="whatsapp"
        aria-label="whatsapp link"
        target="_blank"
        className={styles.link}
      >
        <RiWhatsappLine />
      </a>
    </div>
  );
};
