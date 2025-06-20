import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="cta-section">
    <h2>Ready to protect your content?</h2>
    <p>Join thousands of users who trust Novel AI for AI detection and plagiarism checking. Start your free trial today!</p>
    <Link to="/check" className="cta-btn">Get Started</Link>
  </section>
);

export default CTA; 