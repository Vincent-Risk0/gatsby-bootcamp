//DATE : 9/17/20

import React from "react"
import { Link } from "gatsby"


const Header = () => {
  return (
    <header className={"Header"}>
      <h1 >BlaBla</h1>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/blog"}>Blog</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header