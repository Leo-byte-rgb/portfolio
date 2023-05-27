/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useContext, useRef } from "react";
import styles from "./style.module.scss";

import Button from "../../components/Button";

import { HeightContext } from "../../contexts/heigths";
import { scrollTo } from "../../utils/scrollTo";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { dispatch, state } = useContext(HeightContext);

  useEffect(() => {
    dispatch({ type: "about", payload: sectionRef.current?.offsetTop ?? 0 });
  }, [dispatch, state.about]);

  const scrollToContact = () => scrollTo(state.contact);

  return (
    <section id={styles.about} ref={sectionRef}>
      <div id={styles.titleContainer}>
        <h3>S O B R E</h3>
      </div>
      <div className={styles.resume}>
        <h2>Um pouco sobre mim.</h2>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHk3j2DaWTvmQ/profile-displayphoto-shrink_400_400/0/1682448827885?e=1690416000&v=beta&t=pV8EAKb_DtooqrDErR294iL4msZ6oGwVvahHerO4WgI"
          width={120}
          height={120}
          id={styles.me}
          alt={"eu"}
          style={{ borderRadius: "100%" }}
        />
        <p>
          Desenvolvedor Web com mais de 2 anos de experiência no mercado de
          trabalho, especializado em tecnologias React e React Native,
          familiarizado com boas práticas de desenvolvimento e versionamento de
          código. Durante minha carreira, tive a oportunidade de desenvolver e
          melhorar softwares voltados para empresas como ERPs e BIs, além de
          atuar como bolsista lecionando aulas de programação para alunos do
          curso Técnico Integrado em informática no Instituto Federal de Santa
          Catarina.
        </p>
      </div>
      <div className={styles.resume} id={styles.profile}>
        <ol>
          <li>
            <strong>Nome Completo:</strong>
            <span>Leonardo Agostini Costa</span>
          </li>
          <li>
            <strong>Nascimento:</strong>
            <span>08 de Outubro de 2002</span>
          </li>
          <li>
            <strong>Área de Atuação:</strong>{" "}
            <span>Desenvolvimento Front-End</span>
          </li>
          <li>
            <strong>Website:</strong>
            <a
              className={styles.link}
              href="https:/leo-agostini.dev/"
              target="_blank"
            >
              https:/leo-agostini.dev
            </a>
          </li>
          <li>
            <strong>Email:</strong> <span>leon.ac@outlook.com</span>
          </li>
        </ol>
      </div>
      <div className={styles.resume} id={styles.skills}>
        <h2>Minhas Habilidades.</h2>
        <p>
          Tecnologias com as quais já tive experiência dentro e fora do mercado:
          de trabalho
        </p>
        <ul>
          <li>
            <strong>HTML</strong>
          </li>
          <li>
            <strong>CSS</strong>
          </li>
          <li>
            <strong>SASS</strong>
          </li>
          <li>
            <strong>JAVASCRIPT</strong>
          </li>
          <li>
            <strong>TYPESCRIPT</strong>
          </li>
          <li>
            <strong>NODEJS </strong>
          </li>
          <li>
            <strong>REACT JS</strong>
          </li>
          <li>
            <strong>REACT NATIVE </strong>
          </li>
          <li>
            <strong>SQL </strong>
          </li>
        </ul>
      </div>
      <Button text="Contate-me" onClick={scrollToContact} />
    </section>
  );
};

export default memo(About);
