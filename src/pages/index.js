import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
    <SEO title="Home" />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <p>Welcome to shined.org, owned and operated by Jason Upchurch, as a web development portfolio and collection of personal projects to highlight my experience as a researcher, software developer, and analyst.</p>

    <p>For details about my professional work, publications, and education, please see my  <Link to="/resume/">resume</Link>. <br /> </p>

    
    <Link to="/blog/">blog</Link> <br />
    </div>
    </Layout>
)

export default IndexPage
