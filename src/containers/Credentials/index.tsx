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
            <div className={styles.timeline}>
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
            <p>
              Desenvolvimento de Sistema de Business Inteligence, criando
              interfaces Web performáticas usando ReactJS para o desenvolvimento
              da plataforma, Redux para controle de estado da aplicação e
              Material UI e Styled Components para criar componentes
              estilizados.
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaBriefcase />
            </div>
            <h2>M8 Sistemas</h2>
            <strong>Julho 2022 - Presente</strong>
            <hr />
            <p>
              Desenvolvimento de Sistema ERP para empresas. Utilizando ReactJS
              com Typescript.
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaBriefcase />
            </div>
            <h2>Freelancer - Web</h2>
            <strong>Junho 2021 - Setembro 2021</strong>
            <hr />
            <p>
              Criação de Sistema de Gestão para agricultores, sistema de
              autenticação, Layout e integração com API. No projeto fui
              responsável por desenvolver a arquitetura do projeto onde optei
              por usar ReactJS com Typescript.
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaBriefcase />
            </div>
            <h2>IFSC - Monitor de Informática</h2>
            <strong>Março 2021 - Setembro 2021</strong>
            <hr />
            <p>
              Atuei como monitor de informática pelo Instituto Federal de Santa
              Catarina durante o período 2021/1, onde auxiliei os alunos do
              Câmpus com suas matérias técnicas, entre elas, Programação
              Estruturada, Programação Orientada a Objetos, Programação
              Orientada a Eventos, Estrutura de Dados, Lógica de Programação e
              Desenvolvimento Web.
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.mark}>
              <FaBriefcase />
            </div>
            <h2>Startup Weekend - ImigraWork</h2>
            <strong>Novembro 2021 - Novembro 2021</strong>
            <hr />
            <p>
              Durante os dias 28, 29 e 30 participei do evento Startup Weekend,
              onde fui Campeão da edição junto com meu time. O objetivo do
              Evento era desenvolver uma Startup em 54 horas e apresentá-la para
              os jurados nos dias finais. Como atuante, auxiliei no levantamente
              de Requisitos funcionais para a ideia, participei no processo de
              criação de do MVP (Minimum viable product), entrevistei pessoas
              para descobrir seus problemas e como eu pederia validá-los para
              mais tarde resolvê-los, na reta final do evento, comecei as vendas
              prévias do produto. Durante os 3 dias do evento melhorei minhas
              SoftSkills e mudei o modo de enxergar um produto/startup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Credentials);
