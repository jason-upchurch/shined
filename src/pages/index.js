import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Hero from "../components/Hero"

const IndexPage = () => (
    <Layout>
    <SEO title="Home" />
    
    <p>Welcome to shined.org, and thank you for visiting! <a href="https://www.jason-upchurch.com">jason-upchurch.com</a> also redirects here.</p>

    <p>My name is Jason Upchurch, and I made this site to get hands-on experience building and learning something new, to start a technical <Link to="/blogs/">blog</Link>, and to highlight my project portfolio and professional experience as a researcher, software developer, engineer, and analyst.</p>

    <p>I have a genuine interest in understanding how things work, and I&#39;m most passionate about researching, developing, and implementing novel technical solutions to practical problems. I also enjoy building systems, automating repetetive tasks, and fixing the things I broke when I was fixing other things.</p>

    <p>I have about 18 years of professional experience in Information Technology&mdash;I&#39;ve worked in telecommunications, aerospace, energy, and climate/weather domains, and most recently in campaign finance. I am energized by collegial environments that afford equal time for quiet, introspective and autonomous work requiring deep thought and working strategically across organizational boundaries to collaborate with curious and intellectually flexible problem solvers at all levels.</p>


    <h2>About this site</h2>

    <p>I&#39;m currently underway with getting all the pieces of the site into place, and it&#39;s been a lot of fun to figure things out along the way! Please <i>pardon my dust</i> as I explore the tools for building and maintaing this site (for fun)&mdash;some content and functionalities are incomplete or not yet in existence. I will also <Link to="/blogs/">blog</Link> about my challenges along the way&mdash;along with other topcis&mdash;beginning with <Link to="/blogs/how-i-built-this-site">How I built this site</Link>.</p>

    <p>You can also track my progress (for fun) in the <a href="https://www.github.com/jason-upchurch/shined">GitHub repository</a> for shined.org.</p>

    <p>I am a proponent of free and open-source software, right down to my choice of developer tools (even <a href="https://www.gnu.org/software/emacs/">Emacs</a> has a dark mode, for fun!). However, part of this project is meant for me to gain hands-on experience using some commercial tools, e.g., cloud computing. The tech I used to make this website include:</p>

  <p>
    <ul>
    <li><b>IDE/text editor:</b> <a href="https://www.gnu.org/software/emacs/">GNU Emacs</a> (free and open source).</li>
    <li><b>Machines:</b> <a href="https://system76.com/">System76</a> laptop and desktop (equipment was purchased, <a href="https://ubuntu.com/">Ubuntu</a> OS is free).</li>
    <li><b>Repository:</b> <a href="https://github.com/">GitHub</a> (free, non-enterprise version).</li>
    <li><b>Source code:</b> <a href="https://www.gatsbyjs.org/">Gatsby.js</a>&mdash;based on React (free and open source).</li>
    <li><b>Dependency vulnerability testing:</b> <a href="https://snyk.io/product/">Synk</a> (free version).</li>
    <li><b>Domain registration and DNS hosting for shined.org and jason-upchurch.com:</b> <a href="https://aws.amazon.com/route53/pricing/">AWS Route 53</a> (total annual fee of $23 plus variable cost).
    <blockquote>
    With Amazon Route 53, you don’t have to pay any upfront fees or commit to the number of queries the service answers for your domain. Like with other AWS services, you pay as you go and only for what you use.
  </blockquote></li>
    <li><b>Website hosting and CI/CD:</b> <a href="https://aws.amazon.com/amplify/pricing/">AWS Amplify</a> (variable cost).
    <blockquote>
    AWS Amplify Console is priced for two features ‒ build & deploy, and hosting. For the build & deploy feature the price per build minute is $0.01. For the hosting feature the price per GB served is $0.15 and price per GB stored is $0.023.
    </blockquote></li>
    </ul>
    </p>
  
    <h2>About my logo</h2>
    
    <p>I drew the logo using <a href="https://inkscape.org/about/overview/">Inkscape</a>.</p>
<p>
  <blockquote>Inkscape is free! By this, we mean it is free of cost, free to use and distribute, and open to peek into the source code.</blockquote>
    </p>

    <h2>Disclaimer</h2>
        <p>
    I created and maintain this website at my own, personal expense, for informational purposes only. In particular:</p>

    <ul>
    <li>I neither earn nor receive any compensation of any kind from any party in association with its use, to include any links, mentions, or references.</li>
    <li>I make no endorsements of any of the products or services mentioned in this website.</li>
    <li>This website is not monetized in any way.</li>
    </ul>

  <p>Any opinions expressed through this website are entirely my own and not necessarily those of any present or previous employers.
  </p>

    </Layout>
)

export default IndexPage
