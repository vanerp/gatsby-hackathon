import * as React from "react"
import { Link } from "gatsby"
import { navLinkItem, navLinkText } from "./layout.module.css"

const Layout = ({ linkTo, children }) => {

  return (
    <li className={navLinkItem}>
      <Link to={linkTo} className={navLinkText}>
        {children}
      </Link>
    </li>

  )
}
export default Layout