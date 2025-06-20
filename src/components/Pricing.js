import React from 'react';
import './Pricing.css';

const Pricing = () => (
  <section className="pricing" id="pricing">
    <h2>Pricing</h2>
    <div className="pricing-tiers">
      <div className="tier">
        <h3>Free</h3>
        <div className="price">$0</div>
        <ul>
          <li>5 checks/month</li>
          <li>Basic AI detection</li>
          <li>Basic plagiarism scan</li>
        </ul>
      </div>
      <div className="tier">
        <h3>Pro</h3>
        <div className="price">$12<span style={{fontSize:'1rem',fontWeight:400}}>/mo</span></div>
        <ul>
          <li>Unlimited checks</li>
          <li>Advanced AI detection</li>
          <li>Deep plagiarism scan</li>
          <li>Priority support</li>
        </ul>
      </div>
      <div className="tier">
        <h3>Enterprise</h3>
        <div className="price">Custom</div>
        <ul>
          <li>API access</li>
          <li>Team management</li>
          <li>Custom integrations</li>
          <li>Dedicated support</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing; 