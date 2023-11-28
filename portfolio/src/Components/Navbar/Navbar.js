import React, { useState } from "react"
import logo from "../../Assets/logo.png"
import "./Navbar.css"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    let [showBurgerMenu, setShowBurgerMenu] = useState(false);
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logoImg"></img>

            <div className="desktopMenu">
                <NavLink to="/" className="desktopMenuNavLink">Home</NavLink>
                <NavLink to="/about" className="desktopMenuNavLink">About Me</NavLink>
                <NavLink to="/projects" className="desktopMenuNavLink">Projects</NavLink>
                <NavLink to="/hobbies" className="desktopMenuNavLink">Hobbies</NavLink>
                <NavLink to="/contact" className="desktopMenuNavLink">Contact</NavLink>
            </div>

            <div className="mobileMenu">
                <button className="openMobileMenuButton" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
                    <i className="material-symbols-outlined">menu</i></button>
                <div className={showBurgerMenu ? "mobileMenuVisible": "mobileMenuInvisible"}>
                    <div className="mobileMenuTriangle"></div>
                <NavLink to="/" className="mobileMenuNavLink">Home</NavLink>
                <NavLink to="/about" className="mobileMenuNavLink">About Me</NavLink>
                <NavLink to="/projects" className="mobileMenuNavLink">Projects</NavLink>
                <NavLink to="/hobbies" className="mobileMenuNavLink">Hobbies</NavLink>
                <NavLink to="/contact" className="mobileMenuNavLink">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
