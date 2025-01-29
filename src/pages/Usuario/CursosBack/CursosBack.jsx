import PropTypes from "prop-types";
import { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { RiGuideFill, RiJavaLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logoGuiaAprendizado from "../../../assets/logoGuiaAprendizado.png";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./CursosBack.module.css";

const PrevArrow = ({ onClick }) => (
  <button className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
    <FaChevronRight />
  </button>
);

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const sections = [
  {
    title: "Guia de Primeiros Passos",
    categories: [
      {
        name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "Alura - TechGuide.sh",
            thumbnail: logoGuiaAprendizado,
            link: "https://techguide.sh/",
          },
          {
            title: "Roadmap - Backend Developer",
            thumbnail: logoGuiaAprendizado,
            link: "https://roadmap.sh/backend",
          },
          {
            title: "Trilha.Info - Backend",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.trilha.info/roadmap/backend",
          },
        ],
      },
    ],
  },
  {
    title: "Node.js",
    categories: [
      {
        name: "VÍDEOS",
        items: [
          {
            title: "Como sair do ZERO em Node.js",
            thumbnail:
              "https://img.youtube.com/vi/hHM-hr9q4mo/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=hHM-hr9q4mo&ab_channel=Rocketseat",
          },
          {
            title: "Node.js // Dicionário do Programador",
            thumbnail:
              "https://img.youtube.com/vi/vYekSMBCCiM/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=vYekSMBCCiM&ab_channel=C%C3%B3digoFonteTV",
          },
          {
            title: "Criando aplicação NODE JS do ZERO",
            thumbnail:
              "https://img.youtube.com/vi/GVF--Rl3bP4/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=GVF--Rl3bP4&ab_channel=FernandaKipper%7CDev",
          },
        ],
      },
      {
        name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "Node.js Documentation",
            thumbnail: logoGuiaAprendizado,
            link: "https://nodejs.org/en/docs/",
          },
          {
            title: "W3Schools - Node.js",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.w3schools.com/nodejs/",
          },
          {
            title: "Alura - Node.js",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.alura.com.br/artigos/node-js",
          },
        ],
      },
    ],
  },
  {
    title: "Banco de Dados",
    categories: [
      {
        name: "VÍDEOS",
        items: [
          {
            title: "Guanabara - Curso MySQL",
            thumbnail:
              "https://img.youtube.com/vi/Ofktsne-utM/maxresdefault.jpg",
            link: "https://youtu.be/Ofktsne-utM?list=PL4Sl6eAbMK7RU3OL2bbB_R--iwj3QFqLA",
          },
          {
            title: "SQL // Dicionário do Programador",
            thumbnail:
              "https://img.youtube.com/vi/kMznyI7r2Tc/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=kMznyI7r2Tc&ab_channel=C%C3%B3digoFonteTV",
          },
          {
            title: "Curso SQL Completo",
            thumbnail:
              "https://img.youtube.com/vi/rX2I7OjLqWE/maxresdefault.jpg",
            link: "https://youtu.be/rX2I7OjLqWE",
          },
        ],
      },
      {
        name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "MongoDB Documentation",
            thumbnail: logoGuiaAprendizado,
            link: "https://docs.mongodb.com/",
          },
          {
            title: "PostgreSQL Documentation",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.postgresql.org/docs/",
          },
          {
            title: "MySQL Documentation",
            thumbnail: logoGuiaAprendizado,
            link: "https://dev.mysql.com/doc/",
          },
        ],
      },
    ],
  },
  {
    title: "Java",
    categories: [
      {
        name: "VÍDEOS",
        items: [
          {
            title: "Curso de PROGRAMAÇÃO JAVA para INICIANTES",
            thumbnail:
              "https://img.youtube.com/vi/nODe5lFcGpg/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=nODe5lFcGpg&ab_channel=FernandaKipper%7CDev",
          },
          {
            title: "CURSO DE JAVA PARA INICIANTES",
            thumbnail:
              "https://img.youtube.com/vi/mRryrODqQcw/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=mRryrODqQcw&list=PLJ0AcghBBWSi6nK2CUkw9ngvwWB1gE8mL&ab_channel=TiagoAguiar",
          },
          {
            title: "Maratona Java Virado No Jiraya",
            thumbnail:
              "https://img.youtube.com/vi/VKjFuX91G5Q/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=VKjFuX91G5Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW&ab_channel=DevDojo",
          },
        ],
      },
      {
        name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "Documentação Java",
            thumbnail: logoGuiaAprendizado,
            link: "https://docs.oracle.com/en/java/",
          },
          {
            title: "W3Schools - Java",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.w3schools.com/java/",
          },
          {
            title: "Dio - Dicas Úteis em Java",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.dio.me/articles/dicas-uteis-para-iniciantes-em-programacao-java",
          },
        ],
      },
    ],
  },

  {
    title: "Ide Online",
    categories: [
      {
        // name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "JDoodle - Java",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.jdoodle.com/online-java-compiler",
          },
          {
            title: "Programiz - SQL",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.programiz.com/sql/online-compiler/",
          },
        ],
      },
    ],
  },
];

function CursosBack() {
  const sectionRefs = useRef({});

  const handleScrollToSection = (sectionTitle) => {
    const sectionElement = sectionRefs.current[sectionTitle];
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <NavbarHome />
      <div className={styles.menu}>
        {sections.map((section) => (
          <button
            key={section.title}
            className={styles.menuItem}
            onClick={() => handleScrollToSection(section.title)}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className={styles.container}>
        {sections.map((section) => (
          <div
            key={section.title}
            id={section.title}
            className={styles.section}
            ref={(el) => (sectionRefs.current[section.title] = el)}
          >
            <h2 className={styles.sectionTitle}>
              {section.title === "Guia de Primeiros Passos" && (
                <RiGuideFill className={styles.icon} />
              )}
              {section.title === "Node.js" && (
                <FaNodeJs className={styles.icon} />
              )}
              {section.title === "Banco de Dados" && (
                <FaDatabase className={styles.icon} />
              )}
              {section.title === "Ide Online" && (
                <FaComputer className={styles.icon} />
              )}
              {section.title === "Java" && (
                <RiJavaLine className={styles.icon} />
              )}
              {section.title}
            </h2>
            {section.categories.map((category) => (
              <div key={category.name} className={styles.category}>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <Slider {...sliderSettings}>
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className={styles.itemCard}
                      onClick={() => window.open(item.link, "_blank")}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && window.open(item.link, "_blank")
                      }
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className={styles.itemThumbnail}
                      />
                      <div className={styles.itemTitle}>{item.title}</div>
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default CursosBack;
