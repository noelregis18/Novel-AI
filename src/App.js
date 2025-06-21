import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckPage from './pages/CheckPage';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || 'pk_test_dGhhbmtmdWwtbGFtYi0zNS5jbGVyay5hY2NvdW50cy5kZXYk';

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/check" element={<CheckPage />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;
