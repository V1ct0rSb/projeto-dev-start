import styles from "./Home.module.css";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import AnimatedText from "../../../components/Animacao/AnimatedText";
import VideoHome01 from "../../../assets/VideoHome01.mp4";
import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  // Função para monitorar a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função para voltar ao topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavbarHome />
      <main>
        <section className={styles.sectionIntroducao}>
          <h1 className={styles.introTitulo}>Aprenda a programar</h1>
          <div className={styles.animatedTextContainer}>
            <AnimatedText />
            <div className={styles.buttonIntroducao}>
              <button>Mais Informações</button>
            </div>
          </div>
        </section>

        <section className={styles.sectionEngajamento}>
          <div className={styles.engajamentoConteudo}>
            <div className={styles.engajamentoTexto}>
              <h2>Bem-vindo ao DevStart: Comece Sua Jornada na Programação!</h2>
              <p>
                O <strong>DevStart</strong> é a plataforma ideal para quem está
                começando na programação. Aqui, você encontra:
                <ul>
                  <li>Dicas de cursos gratuitos para aprender do zero.</li>
                  <li>
                    Conteúdo educacional prático, pensado para iniciantes.
                  </li>
                  <li>
                    Orientação clara para encontrar o melhor caminho no universo
                    da tecnologia.
                  </li>
                </ul>
                <p>
                  {" "}
                  Sabemos que o começo pode parecer desafiador, mas você não
                  está sozinho nessa jornada. Nossa missão é orientar, educar e
                  inspirar futuros programadores, mostrando que todos têm a
                  capacidade de alcançar seus objetivos com dedicação e as
                  ferramentas certas.
                </p>
                <p>
                  {" "}
                  Seja para criar seu próprio site, desenvolver aplicativos ou
                  entender os conceitos fundamentais da programação, o{" "}
                  <strong>DevStart</strong> está aqui para guiá-lo. Tudo isso de
                  forma simples, gratuita e com o objetivo de ajudar você a
                  crescer e se destacar
                </p>
                <br />
                <strong>
                  DevStart: Seu ponto de partida na programação! 🚀
                </strong>
              </p>
            </div>
            <div className={styles.engajamentoVideo}>
              <video autoPlay loop muted className={styles.bannerVideo}>
                <source src={VideoHome01} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className={styles.sectionPratica}>
          <h2>Você só aprende praticando e experimentando</h2>
          <p>
            Não tenha medo de errar, cada linha de código te aproxima do
            sucesso!
          </p>

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <span className={styles.icon}>🚀</span>
              <h4>Crie projetos do zero</h4>
              <p>Transforme ideias em código funcional.</p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>🎯</span>
              <h4>Estude com objetivos claros</h4>
              <p>Crie um plano de aprendizado eficaz.</p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>⏰</span>
              <h4>Pratique no seu tempo</h4>
              <p>Adapte o aprendizado à sua rotina.</p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>⚡</span>
              <h4>Pequenos passos, grandes conquistas</h4>
              <p>Divida sua jornada em metas menores.</p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>👩‍💻</span>
              <h4>Pratique lógica de programação</h4>
              <p>
                Treine sua capacidade de resolver problemas com exercícios
                focados em algoritmos e lógica.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>🔗</span>
              <h4>Integre teoria com prática</h4>
              <p>
                Não pule os conceitos, mas sempre aplique o que aprender em
                projetos reais.
              </p>
            </div>
          </div>
        </section>

        {/* Botão de voltar ao topo */}
        {showButton && (
          <button className={styles.scrollToTopButton} onClick={scrollToTop}>
            <FaAngleDoubleUp />
          </button>
        )}
      </main>
    </>
  );
}
