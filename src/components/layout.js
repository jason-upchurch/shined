import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navbar from "./Navbar/Navbar"
import "./layout.css"
import Hero from "./Hero"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          maxWidth: `1500px`,
          paddingTop: 0,
        }}
      >
      <Navbar/>
      <div
        style={{
          maxWidth: `1500px`,
          paddingTop: 0,
        }}
      >
      <Hero/>
      </div>
    
      <div
    style={{
          margin: `0 auto`,
          maxWidth: `768px`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
    }}
    >
      <main>{children}</main>
      </div>
      <footer>
          © {new Date().getFullYear()}, Jason Upchurch
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
