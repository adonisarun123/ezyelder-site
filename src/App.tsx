import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
// Import setup check to run automatically in development
import './utils/setupCheck';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OfferingsPage from './pages/OfferingsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import JoinUsPage from './pages/JoinUsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CareersPage from './pages/CareersPage';

// Service sub-pages
import HealthWellnessPage from './pages/services/HealthWellnessPage';
import TechnologyPage from './pages/services/TechnologyPage';
import LeisureOutingsPage from './pages/services/LeisureOutingsPage';
import SatsangsPage from './pages/services/SatsangsPage';
import CustomEngagementsPage from './pages/services/CustomEngagementsPage';

// Blog post pages
import YogaBenefitsSeniorCitizens from './pages/blog/YogaBenefitsSeniorCitizens';
import TechnologyTipsForElders from './pages/blog/TechnologyTipsForElders';
import SocialConnectionsGoldenYears from './pages/blog/SocialConnectionsGoldenYears';
import HealthyEatingSeniors from './pages/blog/HealthyEatingSeniors';
import StayingActiveHome from './pages/blog/StayingActiveHome';
import DigitalBankingSeniors from './pages/blog/DigitalBankingSeniors';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/offerings" element={<OfferingsPage />} />
            <Route path="/offerings/health-wellness" element={<HealthWellnessPage />} />
            <Route path="/offerings/technology" element={<TechnologyPage />} />
            <Route path="/offerings/leisure-outings" element={<LeisureOutingsPage />} />
            <Route path="/offerings/satsangs" element={<SatsangsPage />} />
            <Route path="/offerings/custom-engagements" element={<CustomEngagementsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/yoga-benefits-senior-citizens" element={<YogaBenefitsSeniorCitizens />} />
            <Route path="/blog/technology-tips-for-elders" element={<TechnologyTipsForElders />} />
            <Route path="/blog/social-connections-golden-years" element={<SocialConnectionsGoldenYears />} />
            <Route path="/blog/healthy-eating-seniors" element={<HealthyEatingSeniors />} />
            <Route path="/blog/staying-active-home" element={<StayingActiveHome />} />
            <Route path="/blog/digital-banking-seniors" element={<DigitalBankingSeniors />} />
            <Route path="/join-us" element={<JoinUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
