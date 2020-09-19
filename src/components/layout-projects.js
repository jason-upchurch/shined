/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "./Hero-blog"
import Navbar from "./Navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
      <div
    style={{
      maxWidth: `100%`,
      margin: `0 auto`,
    }}>
      <Navbar/>
      <Hero />
      <div
        style={{
          margin: `0 auto`,
	  position: `relative`,
          maxWidth: `960px`,
        }}
      >
      <div
    style={{
      maxWidth: `768px`,
      position: `relative`,
      padding: `0px 1.45rem`,
      margin: `0 auto`,
    }}>
      <main>{children}</main>
      </div>
        <footer style={{
          margin: `0 auto`,
	  padding: `0px 1.45rem`,
	  paddingBottom: `1.45rem`
        }}>
          © {new Date().getFullYear()} Jason Upchurch
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
