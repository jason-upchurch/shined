import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/shined.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
	background: 'gray',
	marginBottom: `1.45rem`,
	height: '13rem',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        </Link>
	</h1>
	<img src={logo} alt=''/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
