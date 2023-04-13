import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { HeightContext } from "../../contexts/heigths";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import ButtonSubmit from "../../components/Button/Submit";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import styles from "./style.module.scss";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const inputDisabled = !nome || !email || !assunto || !mensagem || loading;

  const onSubmit = async () => {
    setLoading(true);
    await axios.post("/api/notion/", {
      nome,
      email,
      assunto,
      mensagem,
    });
    setLoading(false);
    setNome("");
    setEmail("");
    setAssunto("");
    setMensagem("");
    toast.success(
      "Sua mensagem foi enviada com sucesso :), agora é só aguardar o retorno!"
    );
  };

  const { dispatch } = useContext(HeightContext);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    dispatch({
      type: "contact",
      payload: sectionRef.current?.offsetTop ?? 0,
    });
  }, [dispatch]);

  return (
    <section id={styles.contactUI} ref={sectionRef}>
      <div id={styles.titleContainer}>
        <h3>C O N T A T O</h3>
      </div>
      <div className={styles.resume}>
        <h2>Eu adoraria ouvir você :)</h2>
        <p>
          Caso tenha interesse, pode me contatar, adoraria ouvi-lô, e quem sabe
          não termos uma boa conversa?
        </p>

        <Input
          placeholder="Nome"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNome(event.target.value)
          }
        />
        <Input
          placeholder="Email"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <Input
          placeholder="Assunto"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setAssunto(event.target.value)
          }
        />
        <TextArea
          placeholder="Mensagem"
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setMensagem(event.target.value)
          }
        />
        <ButtonSubmit
          text="Enviar"
          onClick={onSubmit}
          loading={loading}
          disabled={inputDisabled}
        />
      </div>

      <footer id={styles.footer}>
        <span>Todos os direitos reservados.</span>
        <div id={styles.iconList}>
          <a
            href="https://www.linkedin.com/in/leonardo-agostini-costa-4a34371b4/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/leo.agostini2/^" target="_blank">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Leo-byte-rgb" target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
