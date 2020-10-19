import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
    <Layout>
    <h1>shined.org</h1>

    <p>I made this site to get hands-on experience building and learning something new, to start a technical <Link to="/blog/">blog</Link>, and to highlight my project portfolio and professional experience.</p>

    <p>I have about 18 years of professional experience applying Information Technology knowledge in a variety of domains&mdash;telecommunications, aerospace, energy, and climate/weather domains, and most recently in campaign finance.</p>


    <h2>About this site</h2>

    <p>I&#39;m currently underway with getting all the pieces of the site into place, and it&#39;s been a lot of fun to figure things out along the way! Please <i>pardon my dust</i> as I explore the tools for building and maintaing this site (for fun)&mdash;some content and functionalities are incomplete or not yet in existence.</p>

    <p>The code for this site is open source, and I created it by starting with the <a href="https://github.com/gatsbyjs/gatsby-starter-default">gatsby-starter-default</a> template. You can view the source code for shined.org. in my <a href="https://www.github.com/jason-upchurch/shined">GitHub repository</a>.</p>

  <p>I will also <Link to="/blog/">blog</Link> about my challenges along the way&mdash;along with other topics&mdash;beginning with <Link to="/blog/how-i-built-this-site">How I built this site</Link>.</p>

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

	<h2>Image Attributions</h2>
	<ul>
	    <li>Home hero credit: <a href="https://www.nasa.gov/feature/goddard/2020/watch-a-10-year-time-lapse-of-sun-from-nasa-s-sd">NASA's Goddard Space Flight Center/SDO</a></li>
	    <li>Projects hero credit: <a href="https://www.jpl.nasa.gov/spaceimages/details.php?id=PIA23865">NASA/JPL-Caltech</a></li>
	    <li>Blog hero credit: <a href="https://www.nasa.gov/image-feature/goddard/2020/hubble-hooks-a-supernova-host-galaxy/">ESA/Hubble & NASA, S. Smartt et al.</a></li>
    </ul>
	
    </Layout>
)

export default IndexPage
