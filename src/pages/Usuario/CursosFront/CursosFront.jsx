import PropTypes from "prop-types";
import { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { RiGuideFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logoGuiaAprendizado from "../../../assets/logoGuiaAprendizado.png";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./CursosFront.module.css";

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
            link: "https://techguide.sh/pt-BR/path/react/",
          },
          {
            title: " Roadmap - Frontend Developer",
            thumbnail: logoGuiaAprendizado,
            link: "https://roadmap.sh/frontend",
          },
        ],
      },
    ],
  },
  {
    title: "Html",
    categories: [
      {
        name: "VÍDEOS",
        items: [
          {
            title: "Marco Bruno HTML e CSS Feliz",
            thumbnail:
              "https://img.youtube.com/vi/CZPa3-1BKnY/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=CZPa3-1BKnY&list=PLirko8T4cEmzrH3jIJi7R7ufeqcpXYaLa&ab_channel=MarcoBruno", // Link do vídeo
          },
          {
            title: "Curso Completo de HTML e CSS",
            thumbnail:
              "https://img.youtube.com/vi/Ejkb_YpuHWs/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&ab_channel=CursoemV%C3%ADdeo", // Link do vídeo
          },
          {
            title: "Curso completo de HTML",
            thumbnail:
              "https://img.youtube.com/vi/Fhy-5CtVkiM/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=Fhy-5CtVkiM&ab_channel=RafaellaBallerini",
          },
        ],
      },
      {
        name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "MDN Web Docs - HTML",
            thumbnail: logoGuiaAprendizado,
            link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
          },
          {
            title: "Codecademy - HTML",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.codecademy.com/resources/docs/html",
          },
          {
            title: "html.com - HTML",
            thumbnail: logoGuiaAprendizado,
            link: "https://html.com/",
          },
        ],
      },
    ],
  },
  {
    title: "Css",
    categories: [
      {
        name: "VÍDEOS",
        items: [
          {
            title: "Marco Bruno HTML e CSS Feliz",
            thumbnail:
              "https://img.youtube.com/vi/CZPa3-1BKnY/maxresdefault.jpg", // Thumbnail do vídeo
            link: "https://www.youtube.com/watch?v=CZPa3-1BKnY&list=PLirko8T4cEmzrH3jIJi7R7ufeqcpXYaLa&ab_channel=MarcoBruno", // Link do vídeo
          },
          {
            title: "Curso Completo de HTML e CSS",
            thumbnail:
              "https://img.youtube.com/vi/Ejkb_YpuHWs/maxresdefault.jpg", // Thumbnail do vídeo
            link: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&ab_channel=CursoemV%C3%ADdeo", // Link do vídeo
          },
          {
            title: "Flexbox CSS",
            thumbnail:
              "https://img.youtube.com/vi/KbjLtEgmZ_E/maxresdefault.jpg", // Thumbnail do vídeo
            link: "https://www.youtube.com/watch?v=KbjLtEgmZ_E&ab_channel=RafaellaBallerini", // Link do vídeo
          },
        ],
      },
      {
        name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "W3Schools - CSS Tutorial",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.w3schools.com/css/",
          },
          {
            title: "CSS: Folhas de Estilo em Cascata",
            thumbnail: logoGuiaAprendizado,
            link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          },
          {
            title: "Game - Flexbox Froggy",
            thumbnail: logoGuiaAprendizado,
            link: "https://flexboxfroggy.com/#pt-br",
          },
        ],
      },
    ],
  },
  {
    title: "JavaScript",
    categories: [
      {
        name: "VÍDEOS",
        items: [
          {
            title: "Curso Grátis de JavaScript Moderno",
            thumbnail:
              "https://img.youtube.com/vi/BXqUH86F-kA/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&ab_channel=CursoemV%C3%ADdeo", // Link do vídeo
          },
          {
            title: "Desafios JavaScript",
            thumbnail:
              "https://img.youtube.com/vi/bXim6-jCflk/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=bXim6-jCflk&list=PLz_pSrQW_5xJexe74z50HXLCkYDKfks8S&ab_channel=FabioBergmann", // Link do vídeo
          },
          {
            title: "Curso JavaScript",
            thumbnail:
              "https://img.youtube.com/vi/TkD0QMyBa28/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=TkD0QMyBa28&list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6&ab_channel=MatheusBattisti-HoradeCodar", // Link do vídeo
          },
        ],
      },
      {
        name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "MDN Web Docs - JavaScript",
            thumbnail: logoGuiaAprendizado,
            link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          },
          {
            title: "W3Schools - JavaScript",
            thumbnail: logoGuiaAprendizado,
            link: "https://developer.mozilla.org/pt-BR/docs/Web/CSShttps://www.w3schools.com/js/",
          },
          {
            title: "Alura - JavaScript",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.alura.com.br/artigos/javascript",
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
            title: "CodePen",
            thumbnail: logoGuiaAprendizado,
            link: "https://codepen.io/pen/",
          },
          {
            title: "Programiz",
            thumbnail: logoGuiaAprendizado,
            link: "https://www.programiz.com/html/online-compiler/",
          },
        ],
      },
    ],
  },
  {
    title: "Exercicios",
    categories: [
      {
        // name: "GUIA DE APRENDIZADO",
        items: [
          {
            title: "Formulário de matrícula",
            thumbnail: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/896224359279979d380bb3efb8b0018879563541",
            link: "https://www.figma.com/community/file/1392235383386426797",
          },
          {
            title: "Card de Produto • Desafio 02",
            thumbnail: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c251528a5109db28be109953835f44d98fe4660b",
            link: "https://www.https://www.figma.com/community/file/1195050984449538256.com/html/online-compiler/",
          },
          {
            title: "Receita Junina • Desafio 26",
            thumbnail: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/fc8e5d995f3bb905df9c414cb6222a73ce63c8e6",
            link: "https://www.figma.com/community/file/1255887923488942888",
          },
        ],
      },
    ],
  },
];

function CursosFront() {
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
              {section.title === "Html" && <FaHtml5 className={styles.icon} />}
              {section.title === "Css" && <FaCss3Alt className={styles.icon} />}
              {section.title === "JavaScript" && (
                <SiJavascript className={styles.icon} />
              )}
              {section.title === "Ide Online" && (
                <FaComputer className={styles.icon} />
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

export default CursosFront;
