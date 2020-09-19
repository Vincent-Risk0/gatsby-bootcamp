//DATE : 9/17/20

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <Layout className={"About"}>
      <Head title={"About"} />
      <h1>About</h1>
      <p>To learn about me you will come here later :/</p>
      <p>
        Need a developer ? <Link to={"/contact"}>Contact me</Link>{" "}
      </p>
    </Layout>
  )
}
export default AboutPage
