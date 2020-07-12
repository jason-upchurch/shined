import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Jason Upchurch resume" />
	<h1>Jason Upchurch</h1>
	<h2>Professional Experience</h2>
	<h3>Software Developer (IT Specialist, APPSW) 2018---Present</h3>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
