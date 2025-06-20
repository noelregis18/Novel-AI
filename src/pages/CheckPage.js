import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CheckPage.css';

const API_URL = 'http://localhost:5001/api/ai-content-detection';

function getAIScore(sentences) {
  if (!Array.isArray(sentences) || sentences.length === 0) return 'N/A';
  const totalScore = sentences.reduce((sum, s) => sum + (s.score || 0), 0);
  return `Cumulative Score: ${totalScore.toFixed(2)}`;
}

const CheckPage = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: input }),
      });
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to check text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="check-page-container">
        <h2>AI Detection & Plagiarism Checking</h2>
        <form className="check-form" onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste your text here..."
            rows={8}
            required
          />
          <button type="submit" className="cta-btn" disabled={loading}>
            {loading ? 'Checking...' : 'Check Now'}
          </button>
          <div className="min-chars-note">* Minimum 300 characters required for analysis.</div>
        </form>
        {error && <div className="error-msg">{error}</div>}
        {result && (
          <div className="result-section">
            <h3>Results</h3>
            <div className="ai-score">{getAIScore(result.sentences)}</div>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CheckPage; 