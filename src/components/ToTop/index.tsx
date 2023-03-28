import { useContext } from "react";
import styles from "./style.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import { HeightContext } from "../../contexts/heigths";

const FIRST_SECTION_HEIGHT_IN_PIXELS = 950;

const ToTop = () => {
  const pushToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { position } = useContext(HeightContext);

  if (position < FIRST_SECTION_HEIGHT_IN_PIXELS) return <></>;
  return (
    <button id={styles.box} onClick={pushToTop}>
      <AiOutlineArrowUp />
    </button>
  );
};

export default ToTop;
