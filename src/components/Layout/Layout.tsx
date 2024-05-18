import { ReactNode } from "react";
import styles from "./styles.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div id={styles.layout_container}>{children}</div>;
};
