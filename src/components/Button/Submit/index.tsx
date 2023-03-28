import { HTMLAttributes } from "react";
import styles from "./style.module.scss";
interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  loading: boolean;
  disabled: boolean;
}

const ButtonSubmit: React.FC<IButtonProps> = ({
  text,
  loading,
  disabled,
  ...props
}) => (
  <button {...props} id={styles.buttonUI} disabled={disabled}>
    {loading ? (
      <div className={styles.ldsElipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : (
      text
    )}
  </button>
);

export default ButtonSubmit;
