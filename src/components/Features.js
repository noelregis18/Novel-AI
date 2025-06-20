import React from 'react';
import './Features.css';

const Features = () => (
  <section className="features" id="features">
    <div className="feature-card">
      <h3>AI Content Detection</h3>
      <p>Identify AI-generated text in essays, articles, and more using state-of-the-art detection algorithms.</p>
    </div>
    <div className="feature-card">
      <h3>Plagiarism Checker</h3>
      <p>Scan documents against billions of sources to ensure your content is 100% original and unique.</p>
    </div>
    <div className="feature-card">
      <h3>Fast & Accurate</h3>
      <p>Get instant, reliable results with our optimized cloud-based platform, accessible anywhere, anytime.</p>
    </div>
    <div className="feature-card">
      <h3>Privacy First</h3>
      <p>Your documents are never stored. We value your privacy and security above all else.</p>
    </div>
  </section>
);

export default Features; 