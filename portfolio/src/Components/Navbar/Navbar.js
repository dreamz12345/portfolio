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
                    <NavLink to="/" className="desktopMenuNavLink">Home</NavLink>
                    <NavLink to="/projects" className="desktopMenuNavLink">Projects</NavLink>
                    <NavLink to="/about" className="desktopMenuNavLink">About Me</NavLink>
                    <NavLink to="/other" className="desktopMenuNavLink">Other</NavLink>
                    <NavLink to="/contact" className="desktopMenuNavLink">Contact</NavLink>
                </div>

                <div className="mobileMenu">
                    <button className="openMobileMenuButton" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
                        <i className="material-symbols-outlined burgerButton">menu</i></button>
                    <div className={showBurgerMenu ? "mobileMenuVisible": "mobileMenuInvisible"}>
                        <div className="mobileMenuTriangle"></div>
                        <div className="mobileMenuBox">
                            <NavLink to="/" className="mobileMenuNavLink">Home</NavLink>
                            <NavLink to="/about" className="mobileMenuNavLink">About Me</NavLink>
                            <NavLink to="/projects" className="mobileMenuNavLink">Projects</NavLink>
                            <NavLink to="/other" className="mobileMenuNavLink">Other</NavLink>
                            <NavLink to="/contact" className="mobileMenuNavLink">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
