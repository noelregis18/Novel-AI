import React from 'react';
import './Navbar.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar-header">
    <div className="navbar">
      <Link to="/" className="logo">Novel AI</Link>
      <nav>
        <a href="#features">Features</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#pricing">Pricing</a>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="signup-btn">Sign Up / Login</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </div>
  </header>
);

export default Navbar; 