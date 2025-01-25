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
              <span className="prompt">$</span> TrustGraph --init<br/>
              <span className="response">
                ┌────────────────────────────────────┐<br/>
                │  TrustGraph: The AI-Powered        │<br/>
                │  Fact-Checking Terminal            │<br/>
                └────────────────────────────────────┘
              </span>
            </h1>
            <p className="hero-subtitle">
              <span className="prompt">></span> Combat disinformation with precision.<br/>
              <span className="prompt">></span> On-demand fact-checking & data visualization.<br/>
              <span className="prompt">></span> Powered by viral social AI Agent._
            </p>
            <button className="cta-button">
              $ ./get-started.sh
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;