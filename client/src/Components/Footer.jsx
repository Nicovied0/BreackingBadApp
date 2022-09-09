import React from "react";
import "../styles/footer.css";
import LinkedinIcon from "../asssets/linkedinIcon.svg";
import GithubIcon from '../asssets/githubIcon.svg'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__item">
        <div class="footer__reserved">
          <p>
         
            <strong>
              <a target="_blank"> &copy; Copyright ONDev</a>
            </strong>
          </p>
        </div>

        <div class="footer__social">
          <ul className="footerUl">
            <li class="hero__social-icon">
              <a href="https://github.com/Nicovied0" target="_blank">
              <img src={GithubIcon}></img>
                
              </a>
            </li>

            <li class="hero__social-icon">
              <a
                href="https://www.linkedin.com/in/nicoboviedo/"
                target="_blank"
              >
                <img  src={LinkedinIcon}></img>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="sfc3rss7ycjz42fhm6z5xz8gg57qsbzp8nd"></div>
    </footer>
  );
};

export default Footer;
