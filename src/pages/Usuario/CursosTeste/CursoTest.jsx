import PropTypes from "prop-types";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./CursoTest.module.css";

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
    title: "QA Engineer",
    categories: [
      {
        name: "Conteúdos",
        items: [
          {
            title: "Curso do 0 ao QA Módulo Básico",
            thumbnail:
              "https://img.youtube.com/vi/tX3SKUaGL14/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=tX3SKUaGL14&list=PL0nYAInGtru2yb7rJvqPkrVAkjjJnj_mW&index=1&ab_channel=QAlizando",
          },
          {
            title: "Como ser um Analista QA de Sucesso!",
            thumbnail:
              "https://img.youtube.com/vi/eCmIALYTqPk/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=eCmIALYTqPk&ab_channel=C%C3%B3digoFonteTV",
          },
          {
            title: "CRIANDO TESTES DE SOFTWARE DO ZERO",
            thumbnail:
              "https://img.youtube.com/vi/7hh3sdfF0PM/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=7hh3sdfF0PM&ab_channel=lelemainechannel",
          },
        ],
      },
    ],
  },
];

function CursoTest() {
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
              {section.title === "QA Engineer" && (
                <RiGuideFill className={styles.icon} />
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

export default CursoTest;
