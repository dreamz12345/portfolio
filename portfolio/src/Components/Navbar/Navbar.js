import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import "./Navbar.css"

import logo from "../../Assets/logo.png"


const Navbar = () => {
    let [showBurgerMenu, setShowBurgerMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navbarContents">
                <NavLink to="/" className="logoAndPortfolioText">
                    <img src={logo} alt="Logo" className="logoImg"></img>
                    <p className="portfolioText">Portfolio</p>
                </NavLink>
    
                <div className="desktopMenu">
                    <NavLink to="/" className="desktopMenuNavLink button button2"><span>Home</span></NavLink>
                    <NavLink to="/projects" className="desktopMenuNavLink button"><span>Projects</span></NavLink>
                    <NavLink to="/about" className="desktopMenuNavLink button"><span>About Me</span></NavLink>
                    <NavLink to="/other" className="desktopMenuNavLink button"><span>Other</span></NavLink>
                    <NavLink to="/contact" className="desktopMenuNavLink button"><span>Contact</span></NavLink>
                </div>

                <div className="mobileMenu">
                    <button className="openMobileMenuButton" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
                        <i className="material-symbols-outlined burgerButton">menu</i></button>
                    <div className={showBurgerMenu ? "mobileMenuVisible": "mobileMenuInvisible"}>
                        <div className="mobileMenuTriangle"></div>
                        <div className="mobileMenuBox">
                            <NavLink to="/" className="mobileMenuNavLink" onClick={() => setShowBurgerMenu(false)}>Home</NavLink>
                            <NavLink to="/about" className="mobileMenuNavLink" onClick={() => setShowBurgerMenu(false)}>About Me</NavLink>
                            <NavLink to="/projects" className="mobileMenuNavLink" onClick={() => setShowBurgerMenu(false)}>Projects</NavLink>
                            <NavLink to="/other" className="mobileMenuNavLink" onClick={() => setShowBurgerMenu(false)}>Other</NavLink>
                            <NavLink to="/contact" className="mobileMenuNavLink" onClick={() => setShowBurgerMenu(false)}>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
