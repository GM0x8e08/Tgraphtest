import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">HOW IT WORKS</h2>
      
      <div className="steps">
        <div className="step">
          <h3>⌘ Ingest & Analyze</h3>
          <p>
            AI processes content from podcasts, videos, and social media 
            to detect claims, verify credibility, and evaluate context.
          </p>
        </div>

        <div className="step">
          <h3>⌘ Fact-Check on Demand</h3>
          <p>
            Query real-time insights with our chat system. Backed by 
            credible sources, paid seamlessly with crypto.
          </p>
        </div>

        <div className="step">
          <h3>⌘ Generate Trust Scores</h3>
          <p>
            Interactive heat maps and entity graphs visualize claims 
            and build trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 