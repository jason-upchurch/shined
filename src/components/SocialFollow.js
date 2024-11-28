import React from "react"
import {
  FaGithub, FaLinkedin, FaEnvelope,
} from 'react-icons/fa';


export default function SocialFollow() {
  return (
      <div class="social-container">
      <a href="https://www.linkedin.com/in/jmu7av/"
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
