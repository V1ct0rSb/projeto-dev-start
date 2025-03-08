import { useState } from "react";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./Cadastro.module.css";
import Footer from "../../../components/Footer/Footer";

const AdminCadastroCursos = () => {
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [curso, setCurso] = useState({
    titulo: "",
    url: "",
    thumb: "",
    categoria: "",
  });

  const categoriasPorArea = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue"],
    Backend: ["Node.js", "Python", "Java", "PHP", "Ruby", "C#"],
    DevOps: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
    Testes: ["Jest", "Cypress", "Selenium", "Testes Manuais"],
  };

  const handleChange = (e) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };

  const handleAreaChange = (e) => {
    const novaArea = e.target.value;
    setAreaSelecionada(novaArea);
    setCurso({ ...curso, categoria: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Curso cadastrado:", { areaSelecionada, ...curso });
    setCurso({ titulo: "", url: "", thumb: "", categoria: "" });
    setAreaSelecionada("");
  };

  return (
    <>
      <NavbarHome />
      <div className={styles["admin-container"]}>
        <h2 className={styles["admin-title"]}>Cadastrar Novo Curso</h2>

        <div className={styles["admin-form-container"]}>
          <div className={styles["admin-form-group"]}>
            <label className={styles["admin-label"]} htmlFor="area">
              Escolha a Área do Curso:
            </label>
            <select
              id="area"
              className={styles["admin-select"]}
              value={areaSelecionada}
              onChange={handleAreaChange}
            >
              <option value="">Selecione...</option>
              {Object.keys(categoriasPorArea).map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {areaSelecionada && (
            <form onSubmit={handleSubmit} className={styles["admin-form"]}>
              <div className={styles["admin-form-group"]}>
                <label className={styles["admin-label"]} htmlFor="titulo">
                  Título do Curso
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  className={styles["admin-input"]}
                  value={curso.titulo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles["admin-form-group"]}>
                <label className={styles["admin-label"]} htmlFor="url">
                  URL do Vídeo/Site
                </label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  className={styles["admin-input"]}
                  value={curso.url}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles["admin-form-group"]}>
                <label className={styles["admin-label"]} htmlFor="thumb">
                  Thumbnail do Vídeo/Site
                </label>
                <input
                  type="text"
                  id="thumb"
                  name="thumb"
                  className={styles["admin-input"]}
                  value={curso.thumb}
                  onChange={handleChange}
                />
              </div>

              <div className={styles["admin-form-group"]}>
                <label className={styles["admin-label"]} htmlFor="categoria">
                  Categoria do Curso
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  className={styles["admin-select"]}
                  value={curso.categoria}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione...</option>
                  {categoriasPorArea[areaSelecionada].map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className={styles["admin-button"]}>
                Cadastrar Curso
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminCadastroCursos;
