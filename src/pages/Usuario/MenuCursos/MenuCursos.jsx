import { FaCheckCircle, FaCode, FaCogs, FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoBackEnd from "../../../assets/logoBackEnd.png";
import logoDevOps from "../../../assets/logoDevOps.png";
import logoFrontEnd from "../../../assets/logoFrontEnd.png";
import logoQA from "../../../assets/logoQA.png";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./MenuCursos.module.css";

const areas = [
  {
    title: "Frontend",
    description:
      "O Frontend cuida da interface visual que o usuário utiliza. Envolve HTML, CSS, JavaScript e frameworks como Angular, React e Vue.",
    icon: <FaCode />,
    image: logoFrontEnd,
    link: "/CursosFront",
  },
  {
    title: "Backend",
    description:
      "O Backend trata da lógica e dos dados que dão suporte ao sistema, usando tecnologias como Node.js, Python e Java.",
    icon: <FaDatabase />,
    image: logoBackEnd,
    link: "/backend",
  },
  {
    title: "DevOps",
    description:
      "DevOps une desenvolvimento e operações com automação. Ferramentas populares incluem Docker, Kubernetes e AWS.",
    icon: <FaCogs />,
    image: logoDevOps,
    link: "/devops",
  },
  {
    title: "Test/QA",
    description:
      "Testes garantem que o software funcione bem. Aprenda sobre testes unitários, integração e ferramentas como Selenium.",
    icon: <FaCheckCircle />,
    image: logoQA,
    link: "/qa",
  },
];

function MenuCursos() {
  return (
    <div className={styles.container}>
      <NavbarHome />
      <div className={styles.intro}>
        <h1>Descubra as Áreas de Programação</h1>
        <p>
          Explore as principais áreas do desenvolvimento de software e descubra
          como cada uma pode transformar suas ideias em realidade.
        </p>
      </div>
      <h2 className={styles.title}>Áreas de Programação</h2>
      <div className={styles.areasContainer}>
        {areas.map((area, index) => (
          <div key={index} className={styles.areaCard}>
            <div className={styles.iconContainer}>{area.icon}</div>
            <div className={styles.imageContainer}>
              <img src={area.image} alt={area.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.areaTitle}>{area.title}</h3>
              <p className={styles.description}>{area.description}</p>
              <Link to={area.link} className={styles.learnMoreBtn}>
                Aprenda Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCursos;
