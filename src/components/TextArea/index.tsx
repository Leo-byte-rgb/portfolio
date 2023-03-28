import { HTMLAttributes } from "react";
import styles from "./style.module.scss";
interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name?: string;
}

const TextArea: React.FC<ITextAreaProps> = ({ ...props }) => (
  <textarea {...props} id={styles.textAreaUI} />
);

export default TextArea;
