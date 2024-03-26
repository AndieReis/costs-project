import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to='/'>HOME</Link>
            <Link to='/projects'>PROJETOS</Link>
            <Link to='/company'>EMPRESA</Link>
            <Link to='/contact'>CONTATO</Link>
        </nav>
    )
}

export default Navbar