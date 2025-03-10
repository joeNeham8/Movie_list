import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <div classname="navbar-brand">
                <link to="/" >Movie List</link>
                </div>

                <div classname="navbar-menu">
                    <link to="/" className="nav-link">Home</link>
                    <link to="/favorites" className="nav-link">Favorites</link>
                </div>
        </nav>
    );
}

export default Navbar;