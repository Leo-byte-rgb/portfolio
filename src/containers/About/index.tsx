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
          src="https://media.licdn.com/dms/image/D4D03AQFaKesdZIJSpw/profile-displayphoto-shrink_400_400/0/1679253693791?e=1684972800&v=beta&t=ybDth5gewC-L9HyJo7aavKG2IQnsOmGjsAv3MzLCIQI"
          width={75}
          height={75}
          id={styles.me}
          alt={"eu"}
          style={{ borderRadius: "100%" }}
        />
        <p>
          Entusiasmado por tecnologia e inovação, aos 15 anos entrei no
          Instituto Federal de Santa Cararina, onde comecei a cursar o ensino
          médio integrado em informática, lá conheci linguagens como C e Java.
          Com o passar do tempo comecei a estudar Javascript e Typescript,
          atualmente atuo desenvolvendo interfaces web performáticas usando
          ReactJS, futuramente pretendo avançar como programador FullStack.
        </p>
      </div>
      <div className={styles.resume} id={styles.profile}>
        <h2>Meu perfil.</h2>
        <p>
          Considero-me uma pessoa proativa com fome de conhecimento, sempre
          buscando melhorar meu nível técnico e pessoal, sou apaixonado por
          ensinar, então, no que eu puder ajudar alguém, mesmo que seja pouco,
          já fico extramente feliz.
        </p>
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
            <span>https://portfolio-six-ashy-15.vercel.app/</span>
          </li>
          <li>
            <strong>Email:</strong> <span>leon.ac@outlook.com</span>
          </li>
        </ol>
      </div>
      <div className={styles.resume} id={styles.skills}>
        <h2>Minhas Habilidades.</h2>
        <p>
          Atualmente trabalho com desenvolvimento de interfaces Web, faço
          integrações de dados com Javascript e para o Layout da página HTML E
          CSS, como framework/biblioteca minha escolha foi o ReactJS. E como já
          disse anteriormente, estou sempre em busca de me aprimorar e melhorar
          meu nível técnico.
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
