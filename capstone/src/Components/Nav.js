import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";

function Nav() {

    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsiveNav")
    }
    return (
        <header>
            <img src="Logo.svg" alt="logo" />
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Menu</a>
                <a href="/booking">Reservations</a>
                <a href="/">Order online</a>
                <a href="/">Login</a>
                <button className="nav-btn nav-close-btn" onClick={showNav}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNav}>
                <FaBars/>
                </button>
        </header>
    )
}

export default Nav