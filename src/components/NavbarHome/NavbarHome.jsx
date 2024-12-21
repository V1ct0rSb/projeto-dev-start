import styles from "./NavbarHome.module.css"
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import logoPrincipal from "../../assets/logoPrincipal.png"

import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa6";

export default function NavbarHome() {
  return (
    <header className={styles.headerContainer}>
    <div className={styles.logoHeader}>
      <Link to="/" className={styles.logoLinkHeader}>
        <img src={logoPrincipal} alt="Logo DevStart" />
      </Link>
    </div>

    <nav className={styles.navLinksContainer}>
      <a  className={styles.navLink}>
      <GrInstagram />
      </a>
      <a className={styles.navLink}>
      <ImGithub />
      </a>
      <a className={styles.navLink}>
      <FaDiscord />
      </a>
    </nav>

    <div className={styles.loginIconHeader}>
      <Link to="/LoginPaciente">
        <MdAccountCircle className={styles.loginIcon} />
      </Link>
    </div>
  </header>
  )
}

