//DATE : 9/17/20

import React from "react"
import Header from "./Header"
import Footer from "./footer"

import "../style/index.scss"

const Layout = ({ children }) => {
  return (
    <div className={"layout"}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
