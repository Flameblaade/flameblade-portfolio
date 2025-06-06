

import { useState, useEffect } from 'react';

function Header() {
    const [isNavActive, setIsNavActive] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return(
        <header className={`portfolio-header ${hasScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <h1>Flame<span className="highlight">blade</span></h1>
            </div>
            <nav className={`portfolio-nav ${isNavActive ? 'active' : ''}`}>                <ul>
                    <li><a href="#hero" onClick={() => setIsNavActive(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsNavActive(false)}>About</a></li>
                    <li><a href="#experience" onClick={() => setIsNavActive(false)}>Experience</a></li>
                    <li><a href="#skills" onClick={() => setIsNavActive(false)}>Skills</a></li>
                    <li><a href="#services" onClick={() => setIsNavActive(false)}>Services</a></li>
                    <li><a href="#contact" onClick={() => setIsNavActive(false)}>Contact</a></li>
                </ul>
            </nav>
            <div className={`mobile-menu-toggle ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header