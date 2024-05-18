"use client";

import Image from "next/image";
import { MouseEvent, useRef } from "react";
import { variables } from "../../../../variables";
import ProfilePhoto from "../../../assets/ProfilePhoto.jpg";
import styles from "./styles.module.css";

export const AsideHeader = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleTooltipAnimation = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (!ref.current) return;

    const classToBeAdded =
      event.type === "mouseleave"
        ? styles.out_animation
        : styles.enter_animation;
    const classToBeRemoved =
      event.type === "mouseleave"
        ? styles.enter_animation
        : styles.out_animation;

    ref.current.classList.add(classToBeAdded);
    ref.current.classList.remove(classToBeRemoved);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile_img_wrapper}>
        <Image
          width={90}
          className={styles.profile_img}
          height={90}
          src={ProfilePhoto}
          alt="Profile image"
          priority
        />
        <div
          className={styles.profile_dot}
          onMouseEnter={handleTooltipAnimation}
          onMouseLeave={handleTooltipAnimation}
        />
        <div className={styles.profile_pulse} />
        <div className={styles.tooltip_container} ref={ref}>
          <span>
            Estou disponível para contratos freelancer, vamos conversar?
          </span>
        </div>
      </div>
      <a href={variables.linkedin} target="_blank" className={styles.name}>
        Leonardo Agostini Costa
      </a>
      <span className={styles.job_description}>Desenvolvedor Front-end</span>
    </div>
  );
};
