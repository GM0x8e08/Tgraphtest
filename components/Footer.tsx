import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-info">
            <div className="copyright">© 2024 TrustGraph</div>
            <div className="terminal-line">
              <span className="prompt">$</span> system_status
              <span className="status">active_</span>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <span className="group-title">./docs/</span>
              <a href="/privacy">privacy.md</a>
              <a href="/terms">terms.md</a>
              <a href="/about">about.md</a>
            </div>
            <div className="link-group">
              <span className="group-title">./social/</span>
              <a href="https://twitter.com">twitter.sh</a>
              <a href="https://github.com">github.sh</a>
              <a href="https://discord.com">discord.sh</a>
            </div>
            <div className="link-group">
              <span className="group-title">./contact/</span>
              <a href="/support">support.md</a>
              <a href="/contact">contact.md</a>
              <a href="/press">press.md</a>
            </div>
          </div>
        </div>

        <div className="system-info">
          <span className="info-item">node: v2.0.4</span>
          <span className="info-item">env: production</span>
          <span className="info-item">uptime: 99.99%</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;