import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
    <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    
    <p>Welcome to shined.org, and thank you for visiting! <a href="https://www.jason-upchurch.com">jason-upchurch.com</a> also redirects here.</p>

  <h2>About me</h2>

    <p>My name is Jason Upchurch, and I made this site to highlight my project portfolio and professional experience as a researcher, software developer, engineer, and analyst.</p>

    <p>I have a genuine interest in understanding how things work, and I&#39;m most passionate about researching, developing, and implementing novel technical solutions to practical problems. I also enjoy building systems, automating repetetive tasks, and fixing the things I broke when I was fixing other things.</p>

    <p>I have about 18 years of professional experience in Information Technology&mdash;from my first 10 years working with a private telecommunications consulting firm, to the last 8 years working in the Federal Government at NASA, DOE/EIA, and the FEC.</p>

    <p>I&#39;ve worked in data-rich domains&mdash;energy, climate/weather, and most recently in campaign finance&mdash;and in data-sparse domains&mdash;aviation safety. I genuinely enjoy working strategically and working across organizational boundaries to collaborate with curious, intellectually flexible, problem solvers at all levels and domains!</p>


    <h2>About this site</h2>

    <p>I&#39;m currently underway with getting all the pieces of the site into place, and it&#39;s been a lot of fun to figure things out along the way! Please <i>pardon my dust</i> as I attempt to branch out into front-end web development (for fun). I will also <Link to="/blogs/">blog</Link> about my challenges along the way&mdash;along with other topcis&mdash;beginning with <Link to="/blogs/how-i-built-this-site">How I (tried to) build this site</Link>.</p>

    <p>You can also track my progress (for fun) in the <a href="https://www.github.com/jason-upchurch/shined">GitHub repository</a> for shined.org.</p>

    <p>I am a proponent of free and open-source software, right down to my choice of developer tools (even <a href="https://www.gnu.org/software/emacs/">Emacs</a> has a dark mode, for fun!). However, part of this project is meant for me to gain hands-on experience using some commercial tools, e.g., cloud computing. The tech I used to make this website include:</p>

  <p>
    <ul>
    <li><b>IDE/text editor:</b> <a href="https://www.gnu.org/software/emacs/">GNU Emacs</a> (free and open source)</li>
    <li><b>Machines:</b> <a href="https://system76.com/">System76</a> laptop and desktop (equipment was purchased, <a href="https://ubuntu.com/">Ubuntu</a> OS is free)</li>
    <li><b>Repository:</b> <a href="https://github.com/">GitHub</a> (free)</li>
    <li><b>Source code:</b> <a href="https://www.gatsbyjs.org/">Gatsby.js</a>&mdash;based on React (free and open source)</li>
    <li><b>Domain registration and DNS hosting for shined.org and jason-upchurch.com:</b> <a href="https://aws.amazon.com/route53/pricing/">AWS Route 53</a> (total annual fee of $23 plus variable cost)</li>
    <li><b>Website hosting:</b> <a href="https://aws.amazon.com/amplify/pricing/">AWS Amplify</a> (variable cost)</li>
    </ul>
  </p>
  
    <h2>About my logo</h2>
    
    <p>I drew the logo using <a href="https://inkscape.org/about/overview/">Inkscape</a>.</p>
<p>
  <blockquote>Inkscape is free! By this, we mean it is free of cost, free to use and distribute, and open to peek into the source code.</blockquote>
    </p>


    </Layout>
)

export default IndexPage
