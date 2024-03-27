import { Link } from "react-router-dom";

import Container from "./Container";
import logo from "../../img/costs_logo.png";

import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <ul className={styles.list}>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/projects'>PROJETOS</Link>
                    </li>
                    <li>
                        <Link to='/company'>EMPRESA</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTATO</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar