import styles from "./Home.module.css";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import AnimatedText from "../../../components/Animacao/AnimatedText";
import VideoHome01 from "../../../assets/VideoHome01.mp4";
import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Footer from "../../../components/Footer/Footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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

  // Lista de perguntas frequentes
  const faqItems = [
    {
      question: "O que é o DevStart?",
      answer:
        "O DevStart é uma plataforma totalmente gratuita, criada para ajudar você a iniciar na programação com conteúdos práticos, objetivos e voltados para diferentes níveis de aprendizado.",
    },
    {
      question: "Preciso pagar para usar o DevStart?",
      answer:
        "Não! O DevStart é 100% gratuito e está comprometido em oferecer educação acessível e de qualidade para todos que desejam aprender programação.",
    },
    {
      question: "Como lidar com dificuldades ao estudar?",
      answer:
        "Estudar programação pode ser desafiador, mas você não está sozinho! Use nossa comunidade para tirar dúvidas, revise os conteúdos no seu ritmo e lembre-se: errar é uma etapa importante do aprendizado.",
    },
    {
      question: "Existe suporte para dúvidas específicas?",
      answer:
        "Sim! Além de nossos guias, você pode acessar nossa comunidade para receber ajuda de outros iniciantes e programadores experientes.",
    },
    {
      question: "Como o DevStart ajuda na escolha da carreira?",
      answer:
        "Oferecemos conteúdos sobre diferentes áreas da programação, ajudando você a entender as possibilidades e escolher o caminho certo.",
    },
    {
      question: "O que torna o DevStart diferente?",
      answer:
        "Nosso foco está em iniciantes, com conteúdos acessíveis e gratuitos, além de uma comunidade que valoriza o aprendizado colaborativo e o crescimento conjunto.",
    },
    {
      question: "Quais são os próximos passos depois do DevStart?",
      answer:
        "Continue aprofundando seus estudos, participe de projetos práticos e comece a explorar oportunidades no mercado de tecnologia. O DevStart te ajuda a construir a base para o seu futuro!",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
                  Sabemos que o começo pode parecer desafiador, mas você não
                  está sozinho nessa jornada. Nossa missão é orientar, educar e
                  inspirar futuros programadores, mostrando que todos têm a
                  capacidade de alcançar seus objetivos com dedicação e as
                  ferramentas certas.
                </p>
                <p>
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
              <p>
                Dê vida às suas ideias iniciando projetos desde o início.
                Desenvolva soluções práticas e criativas, colocando em prática
                tudo o que você aprendeu.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>🎯</span>
              <h4>Estude com objetivos claros</h4>
              <p>
                Saber exatamente o que você quer alcançar ajuda a manter o foco
                e a motivação.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>⏰</span>
              <h4>Pratique no seu tempo</h4>
              <p>
                Adapte o ritmo de aprendizado às suas necessidades e aproveite
                cada momento ao máximo.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>⚡</span>
              <h4>Pequenos passos grandes conquistas</h4>
              <p>
                Divida sua jornada em etapas menores e celebre cada conquista no
                caminho para alcançar seus objetivos maiores.
              </p>
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

        <section className={styles.sectionFAQ}>
          <h2>Perguntas Frequentes</h2>
          <div className={styles.faqContainer}>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <div className={styles.faqAnswer}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Botão de voltar ao topo */}
        {showButton && (
          <button className={styles.scrollToTopButton} onClick={scrollToTop}>
            <FaAngleDoubleUp />
          </button>
        )}
      </main>

      <Footer />
    </>
  );
}
