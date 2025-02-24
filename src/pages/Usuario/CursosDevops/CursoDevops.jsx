import PropTypes from "prop-types";
import { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaDatabase,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./CursoDevops.module.css";

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
    title: "Contêineres",
    categories: [
      {
        name: "DOCKER",
        items: [
          {
            title: "APRENDA DOCKER DO ZERO",
            thumbnail:
              "https://img.youtube.com/vi/DdoncfOdru8/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=DdoncfOdru8&ab_channel=FernandaKipper%7CDev",
          },
          {
            title: "Introdução ao Docker para iniciantes",
            thumbnail:
              "https://img.youtube.com/vi/01MR38eDXz8/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=01MR38eDXz8&ab_channel=ManualdoDev",
          },
          {
            title: "Eu não sabia o que era Docker até agora...",
            thumbnail:
              "https://img.youtube.com/vi/LGpJuDUaHXY/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=LGpJuDUaHXY&ab_channel=AugustoGalego",
          },
        ],
      },
    ],
  },

  {
    title: "Infraestrutura como Código",
    categories: [
      {
        name: "IaC",
        items: [
          {
            title: "Terraform em 10 Minutos",
            thumbnail:
              "https://img.youtube.com/vi/0EAjJe8aPkc/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=0EAjJe8aPkc&ab_channel=C%C3%B3digoFonteTV",
          },
          {
            title: "O que e Infraestrutura como Codigo?",
            thumbnail:
              "https://img.youtube.com/vi/dKRBKf2K4LY/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=dKRBKf2K4LY&ab_channel=GuidoOliveira",
          },
          {
            title: "Criando Infra na AWS com Terraform (IaC)",
            thumbnail:
              "https://img.youtube.com/vi/BslJdgv_I2c/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=BslJdgv_I2c&ab_channel=FernandaKipper%7CDev",
          },
        ],
      },
    ],
  },
  {
    title: "Versionamento de Código",
    categories: [
      {
        name: "Git",
        items: [
          {
            title: "Aula 1: Versionamento de Código com Git e GitHub",
            thumbnail:
              "https://img.youtube.com/vi/iQn5vZt0iWI/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=iQn5vZt0iWI&ab_channel=PietroMartinsDeOliveira",
          },
          {
            title: "GIT para programadores INICIANTES",
            thumbnail:
              "https://img.youtube.com/vi/P9xXbEhqhqA/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=P9xXbEhqhqA&ab_channel=AttekitaDev",
          },
          {
            title: "Como usar Git e GitHub da Forma mais Fácil",
            thumbnail:
              "https://img.youtube.com/vi/EGmzAs1G0z0/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=EGmzAs1G0z0&ab_channel=HashtagPrograma%C3%A7%C3%A3o",
          },
        ],
      },
    ],
  },
];

function DevOpsResources() {
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
              {section.title === "Contêineres" && (
                <FaDocker className={styles.icon} />
              )}
              {section.title === "Infraestrutura como Código" && (
                <FaDatabase className={styles.icon} />
              )}
              {section.title === "Versionamento de Código" && (
                <FaGithub className={styles.icon} />
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

export default DevOpsResources;
