import { HTMLAttributes } from "react";
import styles from "./style.module.scss";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
}

const Input: React.FC<IInputProps> = ({ ...props }) => (
  <input {...props} id={styles.inputUI} />
);

export default Input;
