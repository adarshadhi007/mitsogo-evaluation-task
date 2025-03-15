import React, { useState, useEffect } from "react";
import "../assets/css/Header.css";
import menuIcon from "../assets/images/menu.png";
import closeIcon from "../assets/images/close.png";

export default function HeaderComponent() {
    const [showMobilemenu, setShowMobilemenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showTrialButton, setShowTrialButton] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isWeb, setIsWeb] = useState(false);

    const handleMenu = () => {
        setShowMobilemenu(!showMobilemenu);
    };

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            setIsTablet(width > 768 && width <= 1024);
            setIsWeb(width > 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);

            if (isWeb) {
                setShowTrialButton(true); 
            } else {
                setShowTrialButton(window.scrollY > 768);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isTablet, isMobile, isWeb]);

    return (
        <div className={`Header-Parent ${isScrolled ? "scrolled" : ""}`}>
            <div className="Header-Name">
                <h3>hexnode</h3>
            </div>
            <div className="Header-Button">
                <button className={`trial-button ${showTrialButton ? "visible" : "hidden"}`}>
                    <a
                        href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        14 DAY FREE TRIAL
                    </a>
                </button>
                {(!showTrialButton || !isMobile) && (
                    <img className="hamburger-icon" src={menuIcon} alt="hamburger-menu" onClick={handleMenu} />
                )}
            </div>

            <div className={showMobilemenu ? "hamburger-screen active" : "hamburger-screen"}>
                <div className="Hamburger-Header-section">
                    <img src={closeIcon} alt="close" onClick={handleMenu} />
                </div>
                <div className="Hamburger-Body-section">
                    <button className="button">
                        <a
                            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            14 DAY FREE TRIAL
                        </a>
                    </button>
                    <span className="login-text">Login</span>
                </div>
            </div>
        </div>
    );
}
