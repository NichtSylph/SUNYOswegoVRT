import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <a
        href="https://ww1.oswego.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/resources/pngs/SUNYOswegoLogoBlackAndWhite.png`}
          alt="SUNY Oswego Logo"
          className="footer-logo"
        />
      </a>
      <address>
        7060 State Route 104
        <br />
        Oswego, NY 13126-3599
        <br />
        315.312.2500
      </address>
    </div>
    <div className="footer-buttons-container">
      <a
        href="https://ww1.oswego.edu/admissions/apply"
        className="footer-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/resources/applyIcon.svg`}
          alt="Apply Icon"
          className="button-icon"
        />
        <span>APPLY</span>
      </a>
      <a
        href="https://ww1.oswego.edu/admissions/request-information"
        className="footer-button request-info"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/resources/requestinfoIcon.svg`}
          alt="Request Info Icon"
          className="button-icon"
        />
        <span>REQUEST INFO</span>
      </a>
      <a
        href="https://ww1.oswego.edu/admissions/undergraduate-admissions/plan-your-visit"
        className="footer-button visit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/resources/visitIcon.svg`}
          alt="Visit Icon"
          className="button-icon"
        />
        <span>VISIT</span>
      </a>
    </div>
    <div className="footer-link-sections">
      <div className="footer-section campus">
        <h3>CAMPUS</h3>
        <ul>
          <li>
            <a href="https://ww1.oswego.edu/about/contact-oswego?_gac=1.262391550.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE">
              Contact us
            </a>
          </li>
          <li>
            <a href="https://www.oswego.edu/safety-on-campus/?_gac=1.87199082.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE">
              Commitment to safety
            </a>
          </li>
          <li>
            <a href="https://ww1.oswego.edu/library/?_gac=1.87199082.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE">
              Library
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section resources">
        <h3>RESOURCES</h3>
        <ul>
          <li>
            <a href="https://ww1.oswego.edu/search-and-directories?_gac=1.87199082.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE#a-z-index&gsc.tab=0">
              A-Z Index
            </a>
          </li>
          <li>
            <a href="https://ww1.oswego.edu/accessibility/?_gac=1.188917593.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE">
              Accessibility
            </a>
          </li>
          <li>
            <a href="https://www.oswego.edu/human-resources/your-opportunity-awaits/?_ga=2.143591029.1942806466.1710439338-1864676751.1706281570&_gac=1.188917593.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE">
              Careers at Oswego
            </a>
          </li>
          <li>
            <a href="https://www.oswego.edu/institutional-research/consumer-information?_ga=2.143591029.1942806466.1710439338-1864676751.1706281570&_gac=1.188917593.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE">
              Consumer Information: Student Right To know
            </a>
          </li>
          <li>
            <a href="https://www.oswego.edu/people-search/?_ga=2.140938866.1942806466.1710439338-1864676751.1706281570&_gac=1.85577451.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE">
              People Search
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section more">
        <h3>MORE</h3>
        <ul>
          <li>
            <a href="https://sunyoswego.formstack.com/forms/report_accessibility_issue?field57188949=https://www.oswego.edu/">
              Report an accessibility issue
            </a>
          </li>
          <li>
            <a href="https://ww1.oswego.edu/about/about-site?_gac=1.182094421.1709593636.CjwKCAiA_5WvBhBAEiwAZtCU7_bfjinJxuBlJUKe1GEE164MBo-roP7TxkS1oGgHX1maKejir8HlHBoCdNkQAvD_BwE">
              About this site
            </a>
          </li>
          <li>
            <a href="https://ww1.oswego.edu/about/internet-privacy-policy">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com/sunyoswego"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/facebooktransparent.svg`}
            alt="Facebook"
            className="social-icon facebook-icon"
          />
        </a>
        <a
          href="https://www.instagram.com/sunyoswego"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/instagramlogo.svg`}
            alt="Instagram"
            className="social-icon instagram-icon"
          />
        </a>
        <a
          href="https://twitter.com/SUNYOswego"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/XLogo.svg`}
            alt="X"
            className="social-icon x-icon"
          />
        </a>
        <a
          href="https://www.youtube.com/SUNYOswegovideo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/youtubelogo.svg`}
            alt="YouTube"
            className="social-icon youtube-icon"
          />
        </a>
      </div>
      <p className="copy-text">© State University of New York at Oswego</p>
    </div>
  </footer>
);

export default Footer;
