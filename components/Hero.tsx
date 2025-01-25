import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
          </div>
          <div className="terminal-body">
            <h1 className="hero-title">
              <span className="prompt">$</span> TrustGraph --init
            </h1>
            <div className="response">
              <p>┌────────────────────────────────────┐</p>
              <p>│  TrustGraph: The AI-Powered        │</p>
              <p>│  Fact-Checking Terminal            │</p>
              <p>└────────────────────────────────────┘</p>
            </div>
            <p className="hero-subtitle">
              <span className="prompt">&gt;</span> Combat disinformation with precision.
              <br />
              <span className="prompt">&gt;</span> On-demand fact-checking & data visualization.
              <br />
              <span className="prompt">&gt;</span> Powered by viral social AI Agent._
            </p>
            <button className="cta-button">$ ./get-started.sh</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
