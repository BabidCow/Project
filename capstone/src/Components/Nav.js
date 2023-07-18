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
                <a>Home</a>
                <a>About</a>
                <a>Menu</a>
                <a>Reservations</a>
                <a>Order online</a>
                <a>Login</a>
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