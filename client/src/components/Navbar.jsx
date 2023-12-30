import { NavLink } from "react-router-dom";
import "./Navbar.css";


export const Navbar = () => {
    return <>
        <header>
            <div className="container">
                <div className="logo">
                    <a href="/">Home page</a>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/register">Contact</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>

    </>
}