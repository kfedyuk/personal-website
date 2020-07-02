import React from "react"
import PropTypes from "prop-types"
import "../../styles/global.css"
import "../../styles/classes.css"
import "../../styles/colors.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
