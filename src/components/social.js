import React from 'react';
import {
  FaTwitter, FaGithub, FaLinkedin, FaEnvelope,
} from 'react-icons/fa';

const Social = () => (
	<div id="socialwrapper"
    style={{
	margin: '0 auto',
        maxWidth: 960,
        padding: '1.4rem 1.0875rem 1rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    }}
	>

      <div  id="social"
    style={{
          flex: '2.3',
        display: 'flex',
          justifyContent: 'center',
            alignItems: 'center',
        }}
      >
        <div>
          <div
    style={{
              textAlign: 'center',
        fontSize: '2em',
            }}
          >
            <a href="https://twitter.com/jasonmupchurch" aria-label="Twitter">
        <FaTwitter style={{ margin: '10', color: 'gray' }} />
    </a>

            <a href="https://www.linkedin.com/in/jason-upchurch/" aria-label="LinkedIn">
        <FaLinkedin style={{ margin: '10', color: 'gray'}} />
        </a>  
            <a href="https://github.com/jason-upchurch" aria-label="Github">
        <FaGithub style={{ margin: '10', color: 'gray'}} />
        </a>
            <a href="mailto:jason-upchurch@mail.com" aria-label="Mail">
        <FaEnvelope style={{ margin: '10', color: 'gray'}} />
        </a>
          </div>
        </div>
      </div>
    </div>
);

export default Social;
