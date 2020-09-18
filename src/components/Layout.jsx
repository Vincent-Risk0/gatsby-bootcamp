//DATE : 9/17/20

import React from "react"
import Header from "./Header"
import Footer from "./footer"

import layoutStyles from "./Layout.module.scss"
import "../style/index.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
