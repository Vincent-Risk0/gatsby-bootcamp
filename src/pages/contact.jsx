//DATE : 9/17/20

import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title={"Contact"} />
      <h1>Contact</h1>
      <p>Vincent 0553435353</p>
      <p>
        Contact me !{" "}
        <a href="https://google.com" target={"_blank"} rel="noreferrer">
          google
        </a>
      </p>
    </Layout>
  )
}
export default ContactPage
