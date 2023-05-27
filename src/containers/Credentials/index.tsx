import { memo, useContext, useEffect, useRef } from "react";
import styles from "./style.module.scss";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

import { HeightContext } from "../../contexts/heigths";

const Credentials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { dispatch } = useContext(HeightContext);

  useEffect(() => {
    dispatch({
      type: "resume",
      payload: sectionRef.current?.offsetTop ?? 0,
    });
  }, [dispatch]);

  return (
    <section id={styles.credentialsUI} ref={sectionRef}>
      <div id={styles.titleContainer}>
        <h3>R E S U M O</h3>
      </div>
      <div className={styles.resume}>
        <h2>Minha credênciais.</h2>
        <p>Um pouco da minha jornada no mundo da Tecnologia.</p>
      </div>
      <div id={styles.timeline}>
        <header>
          <h2>Formação</h2>
        </header>
        <div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaGraduationCap />
            </div>
            <h2>Instituto Federal de Santa Catarina </h2>
            <strong>Feveiro 2018 - Março 2022</strong>
            <hr />
            <p>
              Ensino Médio com Técnico integrado em informática, aprendi
              estruturas de dados, laços, lógica de programação com C e Java,
              regras de negócios, UML e requisitos funcionais.
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaGraduationCap />
            </div>
            <h2>Análise de Sistemas - Unoesc </h2>
            <strong>Julho 2022 - Presente</strong>
            <hr />
            <p>
              Curso superior em Análise de Sistemas, aprofundando conteúdos já
              vistos no IFSC, como estrutura de dados, programação, engenharia
              de software, redes, etc.
            </p>
          </div>
        </div>
      </div>
      <div id={styles.timeline}>
        <header>
          <h2>Experiência</h2>
        </header>
        <div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaBriefcase />
            </div>
            <h2>Aphesis TI - Tecnologia para negócios</h2>
            <strong>Feveiro 2021 - Julho 2022</strong>
            <hr />
            <p>Manutenção e Desenvolvimento de uma plataforma de BI.</p>
          </div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaBriefcase />
            </div>
            <h2>M8 Sistemas</h2>
            <strong>Julho 2022 - Maio 2022</strong>
            <hr />
            <p>Manutenção e Desenvolvimento de um ERP.</p>
          </div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaBriefcase />
            </div>
            <h2>IFSC - Monitor de Informática</h2>
            <strong>Março 2021 - Setembro 2021</strong>
            <hr />
            <p>Lecionei matérias de lógica e programação para estudantes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Credentials);
