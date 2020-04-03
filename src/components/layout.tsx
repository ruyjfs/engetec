/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Particles from "react-particles-js"
import "animate.css"

import Header from "./header"
import "./layout.css"

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

  useEffect(() => {
    // particlesJS.load("particles-js", "../assets/particles.json", function() {
    //   console.log("callback - particles.js config loaded")
    // })
  }, [])

  return (
    <>
      <div className="gradient animate animated fadeIn" style={{ zIndex: -2 }}>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
          className="animated fadeIn"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            // zIndex: -1,
            minHeight: "100vh",
            // padding: `0 1.0875rem 1.45rem`,
            // position: "absolute",
          }}
        >
          <main>{children}</main>
          {/* <footer>
            © {new Date().getFullYear()}, Built with ❤️ by
            {` `}
            <a href="https://www.ruyjfs.com">r u y</a>
          </footer> */}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
