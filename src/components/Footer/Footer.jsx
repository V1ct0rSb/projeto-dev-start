import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialMedia}>
          <h2>Redes Sociais</h2>
          <div className={styles.socialIcons}>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={styles.contactUs}>
          <h2>Contato</h2>
          <p>Email: contato@devstart.com</p>
          <p>Telefone: (79) 3220-1253</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 DevStart. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
