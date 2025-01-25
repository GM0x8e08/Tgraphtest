import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-title">features.sh</span>
        </div>
        <div className="terminal-body">
          <h2 className="section-title">
            <span className="prompt">$</span> cat features.md
          </h2>
          
          <div className="features-grid">
            <div className="feature">
              <h3><span className="number">01</span> Fact-Checking Engine</h3>
              <div className="feature-box">
                <code>
                  {`>> AI-powered analysis\n>> Real-time validation`}
                </code>
              </div>
            </div>

            <div className="feature">
              <h3><span className="number">02</span> Visualization Tools</h3>
              <div className="feature-box">
                <code>
                  {`>> Heat maps\n>> Entity graphs`}
                </code>
              </div>
            </div>

            <div className="feature">
              <h3><span className="number">03</span> Crypto Integration</h3>
              <div className="feature-box">
                <code>
                  {`>> Seamless payments\n>> Token rewards`}
                </code>
              </div>
            </div>

            <div className="feature">
              <h3><span className="number">04</span> AI Agents Engagement</h3>
              <div className="feature-box">
                <code>
                  {`>> Social monitoring\n>> Automated responses`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;