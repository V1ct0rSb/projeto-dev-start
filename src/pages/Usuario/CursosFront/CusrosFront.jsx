import PropTypes from "prop-types"; // Importação do pacote prop-types
import Slider from "react-slick";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./CursosFront.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Botões customizados para o carrossel
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

// Validação de propriedades para PrevArrow e NextArrow
PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// Dados para os vídeos e prática
const sections = [
  {
    title: "HTML",
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
        name: "PRÁTICA",
        items: [
          {
            title: "MDN Web Docs - HTML",
            thumbnail: "https://via.placeholder.com/600x300?text=Prática",
            link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
          },
          {
            title: "Codecademy - HTML",
            thumbnail: "https://via.placeholder.com/600x300?text=Prática",
            link: "https://www.codecademy.com/resources/docs/html",
          },
          {
            title: "html.com - HTML",
            thumbnail: "https://via.placeholder.com/600x300?text=Prática",
            link: "https://html.com/",
          },
        ],
      },
    ],
  },
  {
    title: "CSS",
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
        name: "PRÁTICA",
        items: [
          {
            title: "HTML: Linguagem de Marcação de Hipertexto",
            thumbnail: "https://via.placeholder.com/600x300?text=Prática",
            link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
          },
          {
            title: "CSS: Folhas de Estilo em Cascata",
            thumbnail: "https://via.placeholder.com/600x300?text=Prática",
            link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          },
          {
            title: "JavaScript: Linguagem de Programação",
            thumbnail: "https://via.placeholder.com/600x300?text=Prática",
            link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          },
        ],
      },
    ],
  },
];

function CursosFront() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <NavbarHome />
      <div className={styles.container}>
        {sections.map((section) => (
          <div key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.categories.map((category) => (
              <div key={category.name} className={styles.category}>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <Slider {...sliderSettings} className={styles.teste}>
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
