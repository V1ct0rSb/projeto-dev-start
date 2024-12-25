import { FaCode, FaDatabase, FaCogs, FaCheckCircle } from "react-icons/fa";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./MenuCursos.module.css";

const areas = [
  {
    title: "Frontend",
    description:
      "O Frontend é a parte da programação que lida com a interface com a qual o usuário interage. Aprenda sobre HTML, CSS, JavaScript, e frameworks como React, Angular, e Vue.",
    icon: <FaCode />,
    image: "https://via.placeholder.com/300x200?text=Frontend",
  },
  {
    title: "Backend",
    description:
      "O Backend é responsável por garantir que a lógica do aplicativo funcione, lidando com bancos de dados, servidores e APIs. Tecnologias comuns incluem Node.js, Python, Ruby, e Java.",
    icon: <FaDatabase />,
    image: "https://via.placeholder.com/300x200?text=Backend",
  },
  {
    title: "DevOps",
    description:
      "DevOps foca em automação e integração contínua, garantindo que o desenvolvimento e a operação de software ocorram sem interrupções. Aprenda sobre ferramentas como Docker, Kubernetes e AWS.",
    icon: <FaCogs />,
    image: "https://via.placeholder.com/300x200?text=DevOps",
  },
  {
    title: "Test/QA",
    description:
      "Testes e QA garantem que o software seja confiável e funcione conforme esperado. Aprenda sobre testes unitários, integração e frameworks como Jest, Mocha e Selenium.",
    icon: <FaCheckCircle />,
    image: "https://via.placeholder.com/300x200?text=QA",
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
              <button
                className={styles.learnMoreBtn}
                title={`Saiba mais sobre ${area.title}`}
              >
                Aprenda Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCursos;
