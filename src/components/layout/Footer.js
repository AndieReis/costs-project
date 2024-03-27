import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>

            </ul>
            <p className={styles.copy}><span>Desenvolvido por Andie Reis</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer