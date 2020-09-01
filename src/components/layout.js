import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./Navbar/Navbar"
import Hero from "./Hero"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          maxWidth: `1500px`,
          paddingTop: 0,
	  height: `100%`,
        }}
      >
      <Navbar/>
      <div
        style={{
          maxWidth: `1500px`,
          paddingTop: 0,
	  position:`relative`,
	  width: `100%`,
	  top: `0`,
        }}
      >
      <Hero/>
      </div>
    
      <div
    style={{
          margin: `0 auto`,
          maxWidth: `768px`,
      padding: `0px 1.45rem`,
      position: `relative`,
      height: `100%`,
      top: `4rem`,
      paddingBottom: `4rem`,
      background: `white`,
 
    }}
    >
      <main>{children}</main>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
