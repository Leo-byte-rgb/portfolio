import { AsideContent } from "./AsideContent/AsideContent";
import { AsideFooter } from "./AsideFooter/AsideFooter";
import { AsideHeader } from "./AsideHeader/AsideHeader";
import styles from "./styles.module.css";

export const Aside = () => {
  return (
    <aside className={styles.container}>
      <AsideHeader />
      <AsideContent />
      <AsideFooter />
    </aside>
  );
};
