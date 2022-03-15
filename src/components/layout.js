import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavLink from "./nav-link"
import { container, heading, navLinks, siteTitle } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>

      <nav>
        <ul className={navLinks}>
          <NavLink linkTo="/">Home</NavLink>
          <NavLink linkTo="/about">About</NavLink>
          <NavLink linkTo="/blog">Blog</NavLink>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout