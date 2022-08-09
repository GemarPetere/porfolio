import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import {header, btn} from '../styles/home.module.css'

export default function Home({data}) {
  const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Software Engineer based in Banaybanay, Davao Oriental, Philippines</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <p>{title} - {description}</p>
      </section>
    </Layout>
  )
}
export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      copyright
      description
      title
    }
  }
}
`
