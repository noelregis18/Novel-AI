import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <h1>AI Detection & Plagiarism Checking, Reinvented</h1>
    <p>Novel AI leverages advanced artificial intelligence to detect AI-generated content and check for plagiarism with unmatched accuracy. Protect your originality and ensure authenticity in every document.</p>
    <Link to="/check" className="cta-btn">Get Started</Link>
  </section>
);

export default Hero; 