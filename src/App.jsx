// frontend/src/App.jsx
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import { apiService } from './services/api';

// ─── Existing Pages ──────────────────────────────────────────────
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import SolutionsPage from './pages/Solutions/SolutionsPage';

// ─── New Pages (Company & more) ──────────────────────────────────
import CompanyPage from './pages/Company/CompanyPage';
import HistoryPage from './pages/History/HistoryPage';
import WhyUsPage from './pages/WhyUs/WhyUsPage';
import TeamPage from './pages/Team/TeamPage';
import ExpertisePage from './pages/Expertise/ExpertisePage';
import CareerPage from './pages/Career/CareerPage';
import BlogPage from './pages/Blog/BlogPage';
import FAQPage from './pages/FAQ/FAQPage';

// ─── Resources (SEO articles) ────────────────────────────────────
import ResourcesPage from './pages/Resources/ResourcesPage';
import ArticlePage from './pages/Resources/ArticlePage';

// ─── Industry Landing Pages (SEO) ────────────────────────────────
import IndustryLandingPage from './pages/IndustryLanding/IndustryLandingPage';

// ─── Portfolio Pages (now separate components) ──────────────────
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import PortfolioBIPage from './pages/PortfolioBI/PortfolioBIPage';
import PortfolioAIPage from './pages/PortfolioAI/PortfolioAIPage';
import PortfolioPipelinesPage from './pages/PortfolioPipelines/PortfolioPipelinesPage';
import PortfolioMobilePage from './pages/PortfolioMobile/PortfolioMobilePage';

// ─── Other Pages ─────────────────────────────────────────────────
import ClientsPage from './pages/Clients/ClientsPage';
import TestimonialsPage from './pages/Testimonials/TestimonialsPage';
import SitemapPage from './pages/Sitemap/SitemapPage';
import CaseStudiesPage from './pages/CaseStudies/CaseStudiesPage';

// ────────────────────────────────────────────────────────────────
// NOTE: The old Navigation + Footer components were removed from
// here. Every page now gets its nav/footer from PageLayout.jsx
// (inner pages) or renders its own inline (HomePage.jsx /
// CompanyPage.jsx). Rendering them again here caused the old
// plain nav to show faintly behind the real nav.
// ────────────────────────────────────────────────────────────────

// AppContent – all routes
const AppContent = () => {
    const location = useLocation();

    // Page-view tracking (previously lived inside the old Navigation component)
    useEffect(() => {
        const pageName = location.pathname.replace('/', '') || 'home';
        apiService.trackPageView(pageName);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={styles.app}>
            <main className={styles.main}>
                <Routes>
                    {/* Existing */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    {/* Company & related */}
                    <Route path="/company" element={<CompanyPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/why-us" element={<WhyUsPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/expertise" element={<ExpertisePage />} />
                    <Route path="/career" element={<CareerPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/faq" element={<FAQPage />} />

                    {/* Resources — original SEO articles, one per search term */}
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/resources/:slug" element={<ArticlePage />} />

                    {/* Industry landing pages — one per high-intent search term */}
                    <Route path="/dental-analytics" element={<IndustryLandingPage dataKey="dental-analytics" />} />
                    <Route path="/veterinary-analytics" element={<IndustryLandingPage dataKey="veterinary-analytics" />} />
                    <Route path="/medical-practice-analytics" element={<IndustryLandingPage dataKey="medical-practice-analytics" />} />

                    {/* Portfolio main page */}
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    {/* Portfolio sub‑categories – each uses its own component */}
                    <Route path="/portfolio/bi" element={<PortfolioBIPage />} />
                    <Route path="/portfolio/ai" element={<PortfolioAIPage />} />
                    <Route path="/portfolio/pipelines" element={<PortfolioPipelinesPage />} />
                    <Route path="/portfolio/mobile" element={<PortfolioMobilePage />} />

                    {/* Other */}
                    <Route path="/clients" element={<ClientsPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                </Routes>
            </main>
        </div>
    );
};

// ────────────────────────────────────────────────────────────────
// Main App
function App() {
    return (
        <HelmetProvider>
            <Router>
                <AppContent />
            </Router>
        </HelmetProvider>
    );
}

export default App;