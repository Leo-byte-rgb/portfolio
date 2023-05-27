import { memo, useRef } from "react";
import styles from "./style.module.scss";

import Button from "../../components/Button";
import {
  AiOutlineCaretDown,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTo = () =>
    window.scrollTo({
      top: containerRef.current?.offsetHeight ?? 0,
      behavior: "smooth",
    });

  return (
    <div id={styles.container} ref={containerRef}>
      <section id={styles.landing}>
        <h1>Leonardo Agostini Costa</h1>
        <div id={styles.infos}>
          <span>FRONT-END DEVELOPER</span>
          <span>CHAPECÓ - SC</span>
        </div>
        <Button
          text="Sobre mim"
          Icon={<AiOutlineCaretDown />}
          onClick={scrollTo}
        />
      </section>
      <footer>
        <a
          href="https://www.linkedin.com/in/leonardo-agostini-costa-4a34371b4/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/leo.agostini2/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Leo-byte-rgb" target="_blank">
          <AiFillGithub />
        </a>
      </footer>
    </div>
  );
};

export default memo(Landing);
