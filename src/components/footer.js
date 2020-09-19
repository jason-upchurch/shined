import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
    <footer
  style={{
    marginTop: `2rem`
        }}>
          © {new Date().getFullYear()} Jason Upchurch
        </footer>
)

export default Footer
