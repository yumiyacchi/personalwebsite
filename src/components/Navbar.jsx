import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="contact">Contacto</Link>
            <Link to="/events">Noticias</Link>
        </nav>
    );
};

export default Navbar;
