// frontend/src/App.jsx

import { Database, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import { apiService } from './services/api';

// Import pages
import AboutPage from './pages/AboutPage';
//import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';

// Navigation Component
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Track page views
        const pageName = location.pathname.replace('/', '') || 'home';
        apiService.trackPageView(pageName);

        // Close mobile menu on route change
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Pricing', path: '/pricing' },
        //{ name: 'Case Studies', path: '/case-studies' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
            <div className={styles.navContainer}>
                <Link to="/" className={styles.logo}>
                    <Database className={styles.logoIcon} size={32} />
                    <span className={styles.logoText}>Scape Data Solutions</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => apiService.trackInteraction('navigation', 'nav_click', { page: link.name })}
                            className={styles.navLink}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                apiService.trackInteraction('navigation', 'mobile_nav_click', { page: link.name });
                            }}
                            className={styles.mobileNavLink}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogo}>
                            <Database className={styles.footerLogoIcon} size={24} />
                            <span className={styles.footerLogoText}>Scape Data Solutions</span>
                        </div>
                        <p className={styles.footerDescription}>
                            Transforming data into actionable business intelligence across East Africa.
                        </p>
                    </div>

                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>Services</h3>
                        <ul className={styles.footerLinks}>
                            <li><Link to="/services">Data Analytics</Link></li>
                            <li><Link to="/services">Business Intelligence</Link></li>
                            <li><Link to="/services">AI & Machine Learning</Link></li>
                            <li><Link to="/services">Data Engineering</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>Company</h3>
                        <ul className={styles.footerLinks}>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerTitle}>Contact</h3>
                        <ul className={styles.footerContact}>
                            <li>Westlands, Nairobi</li>
                            <li>Kenya</li>
                            <li>info@scapedatasolutions.com</li>
                            <li>+254 700 000 000</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} Scape Data Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Navigation />
                <main className={styles.main}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/solutions" element={<SolutionsPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;