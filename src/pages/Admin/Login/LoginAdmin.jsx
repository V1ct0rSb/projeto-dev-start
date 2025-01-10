import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Navegação para outras páginas
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./LoginAdmin.module.css";

const AdminLogin = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <NavbarHome />
      <div className={styles.container}>
        {!showLogin ? (
          <div className={`${styles.card} ${styles.fadeIn}`}>
            <div className={styles.warningBox}>
              <h1 className={styles.warning}>⚠️</h1>
            </div>
            <h2 className={styles.title}>Área de Administradores</h2>
            <p className={styles.paragraph}>
              Apenas administradores têm permissão para acessar esta página.
            </p>
          </div>
        ) : (
          <div className={`${styles.card} ${styles.fadeIn}`}>
            <h1 className={styles.title}> Login</h1>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="username">👤 Usuário</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Digite seu usuário"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">🔒 Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.button}>
                Entrar
              </button>
            </form>
            <button className={styles.backButton} onClick={handleBackToHome}>
              ⬅️ Voltar para Home
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminLogin;
