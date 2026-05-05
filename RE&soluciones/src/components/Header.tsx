'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      let currentSectionId = 'hero';

      sections.forEach(current => {
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSectionId = current.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`} id="header">
      <div className="container header-content">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <img
            src={isScrolled || isMobileMenuOpen ? "/images/logo.png" : "/images/logo.png"}
            alt="R&S Soluciones Integrales"
            className="header-logo"
          />
          <span className="logo-text" style={{
            display: 'none',
            fontWeight: 800,
            fontSize: '1.2rem'
          }}>R&S SOLUCIONES</span>
        </Link>

        <nav className="navbar" id="navbar">
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={closeMobileMenu}>Inicio</Link></li>
            <li><Link href="#nosotros" className={activeSection === 'nosotros' ? 'active' : ''} onClick={closeMobileMenu}>Nosotros</Link></li>
            <li><Link href="#servicios" className={activeSection === 'servicios' ? 'active' : ''} onClick={closeMobileMenu}>Servicios</Link></li>
            <li><Link href="#sectores" className={activeSection === 'sectores' ? 'active' : ''} onClick={closeMobileMenu}>Sectores</Link></li>
            <li><Link href="#contratacion" className={activeSection === 'contratacion' ? 'active' : ''} onClick={closeMobileMenu}>Contratación</Link></li>
            <li><Link href="#portafolio" className={activeSection === 'portafolio' ? 'active' : ''} onClick={closeMobileMenu}>Portafolio</Link></li>
            <li><Link href="#contacto" className={activeSection === 'contacto' ? 'active' : ''} onClick={closeMobileMenu}>Contacto</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="#contacto" className="btn btn-primary">Cotizar Asesoría</Link>
          <button
            className="mobile-toggle"
            id="mobile-toggle"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
