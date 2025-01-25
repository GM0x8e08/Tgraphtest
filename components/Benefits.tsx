import React from 'react';

const Benefits = () => {
  return (
    <section className="benefits">
      <h2 className="section-title">BENEFITS</h2>
      
      <div className="benefits-grid">
        <div className="benefit">
          <h3>→ Transparency</h3>
          <p>
            Every claim is backed by references and validated with AI networks.
            <span className="terminal-cursor">█</span>
          </p>
        </div>

        <div className="benefit">
          <h3>→ Interactivity</h3>
          <p>
            Query the terminal, access live fact-checking, and engage with data on-demand.
            <span className="terminal-cursor">█</span>
          </p>
        </div>

        <div className="benefit">
          <h3>→ Accountability</h3>
          <p>
            Track episodes, events, and reputations with TrustScore.
            <span className="terminal-cursor">█</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 