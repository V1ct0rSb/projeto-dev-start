import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import VideoHome01 from "../../../assets/VideoHome01.mp4";
import AnimatedText from "../../../components/Animacao/AnimatedText";
import Footer from "../../../components/Footer/Footer";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./Home.module.css";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

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

  // Lista de depoimentos
  const testimonials = [
    {
      name: "João Silva",
      text: "O DevStart foi essencial para meus primeiros passos na programação. Conteúdos claros e objetivos!",
    },
    {
      name: "Maria Oliveira",
      text: "Plataforma incrível! Cursos bem estruturados e uma comunidade muito acolhedora.",
    },
    {
      name: "Carlos Pereira",
      text: "Com o DevStart, aprendi programação de forma prática e divertida. Recomendo!",
    },
    {
      name: "Ana Costa",
      text: "Ótima para iniciantes! A comunidade oferece um suporte excepcional para tirar dúvidas.",
    },
    {
      name: "Pedro Santos",
      text: "O DevStart transformou minha jornada na programação. Didática perfeita para quem está começando!",
    },
    {
      name: "Laura Mendes",
      text: "Aprendi muito em pouco tempo. A plataforma é intuitiva e os instrutores são excelentes!",
    },
  ];

  // Lista de perguntas frequentes
  const faqItems = [
    {
      question: "O que é o DevStart?",
      answer:
        "O DevStart é uma plataforma gratuita, projetada para guiar você nos primeiros passos na programação. Reunimos conteúdos práticos, objetivos e acessíveis para diferentes níveis de aprendizado.",
    },
    {
      question: "Preciso pagar para usar o DevStart?",
      answer:
        "Não! O DevStart é completamente gratuito e comprometido em tornar a educação em tecnologia acessível para todos.",
    },
    {
      question: "Como superar dificuldades ao estudar programação?",
      answer:
        "Aprender programação pode ser desafiador, mas faz parte do processo. Recomendamos revisar os conteúdos no seu ritmo, participar de nossa comunidade para tirar dúvidas e lembrar que errar é essencial para o aprendizado.",
    },
    {
      question: "Posso obter ajuda para dúvidas específicas?",
      answer:
        "Claro! Além de nossos materiais, você pode acessar a comunidade DevStart para trocar experiências e receber suporte de outros estudantes e programadores.",
    },
    {
      question: "Como o DevStart pode ajudar na escolha da minha carreira?",
      answer:
        "Oferecemos conteúdos que exploram diferentes áreas da programação, ajudando você a descobrir suas preferências e a escolher o caminho certo no universo da tecnologia.",
    },
    {
      question: "O que diferencia o DevStart de outras plataformas?",
      answer:
        "Nosso foco está em iniciantes, oferecendo materiais acessíveis, gratuitos e uma comunidade que valoriza a troca de conhecimento e o aprendizado colaborativo. No entanto, programadores de outros níveis também são bem-vindos para explorar, revisar conceitos e expandir suas habilidades.",
    },
    {
      question: "Quais são os próximos passos após usar o DevStart?",
      answer:
        "Depois de construir uma base sólida, avance em seus estudos, participe de projetos práticos e explore oportunidades no mercado de tecnologia. O DevStart estará sempre aqui para apoiar sua jornada!",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // useEffect para passar automaticamente pelos depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000); // Muda o depoimento a cada 5 segundos

    return () => clearInterval(interval);
  }, [currentTestimonialIndex]);

  return (
    <>
      <NavbarHome />
      <main>
        <section className={styles.sectionIntroducao}>
          <h1 className={styles.introTitulo}>Aprenda a programar</h1>
          <div className={styles.animatedTextContainer}>
            <AnimatedText />
            <div className={styles.buttonIntroducao}>
              <a href="/MenuCursos" className={styles.botaoLink}>
                Explorar Agora!!
              </a>
            </div>
          </div>
        </section>

        <section className={styles.sectionEngajamento}>
          <div className={styles.engajamentoConteudo}>
            <div className={styles.engajamentoTexto}>
              <h2>
                Bem-vindo ao DevStart: Aprenda Programação de Forma Simples e
                Eficiente!
              </h2>
              <p>
                <strong>DevStart</strong> é a plataforma criada para quem está
                dando os primeiros passos no mundo da programação. Aqui, você
                encontra:
                <ul>
                  <li>Vídeos do YouTube explicativos e didáticos.</li>
                  <li>Cursos gratuitos para aprender programação do zero.</li>
                  <li>Links para sites confiáveis com conteúdo educativo.</li>
                  <li>
                    Dicas práticas para facilitar sua jornada de aprendizado.
                  </li>
                </ul>
              </p>
              <p>
                Sabemos que começar pode ser desafiador, mas você não precisa
                enfrentar isso sozinho. Nossa missão é reunir recursos
                didáticos, confiáveis e gratuitos para ajudar você a superar
                obstáculos e alcançar seus objetivos.
              </p>
              <p>
                Seja para criar um site, desenvolver aplicativos ou entender os
                fundamentos da programação, o <strong>DevStart</strong> está
                aqui para simplificar sua trajetória e inspirar você a crescer.
              </p>
              <br />
              <p>
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
                e a motivação. Defina metas claras e acompanhe seu progresso.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>⏰</span>
              <h4>Pratique no seu tempo</h4>
              <p>
                Adapte o ritmo de aprendizado às suas necessidades e aproveite
                cada momento ao máximo. A consistência é a chave para o sucesso.
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
                projetos reais. A teoria e a prática andam juntas.
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

        <section className={styles.sectionTestimonials}>
          <h2>O que nossos usuários dizem</h2>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <p>{testimonials[currentTestimonialIndex].text}</p>
              <h4>- {testimonials[currentTestimonialIndex].name}</h4>
            </div>
            <div className={styles.navigationButtons}>
              <button
                onClick={prevTestimonial}
                className={styles.testimonialButton}
              >
                ❮
              </button>
              <button
                onClick={nextTestimonial}
                className={styles.testimonialButton}
              >
                ❯
              </button>
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

      <Footer />
    </>
  );
}
