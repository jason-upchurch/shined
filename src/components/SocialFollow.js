import React from "react"
import {
  FaTwitter, FaGithub, FaLinkedin, FaEnvelope,
} from 'react-icons/fa';


export default function SocialFollow() {
  return (
      <div class="social-container">
      <a href="https://twitter.com/jasonmupchurch"
    className="twitter social" aria-label="Twitter">
      <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/jason-upchurch/"
    className="linkedin social" aria-label="LinkedIn">
      <FaLinkedin/>
      </a>  
      <a href="https://github.com/jason-upchurch"
    className="github social" aria-label="Github">
      <FaGithub/>
      </a>
      <a href="mailto:jason-upchurch@mail.com"
    className="email social" aria-label="Mail">
      <FaEnvelope/>
      </a>
      </div>
  );
}
