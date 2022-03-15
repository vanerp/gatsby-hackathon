import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "@components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout pageTitle={tagHeader}>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node
          const { title, date } = node.frontmatter
          return (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${slug}`}>
                  {title}
                </Link>
              </h2>
              <p>Posted: {date}</p>
            </article>
          )
        })}
      </ul>
      <Link to="/blog/tags">All tags</Link>
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
    query($tag: String) {
        allMdx(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        author
                        date
                        tags
                    }
                    id
                    slug
                }
            }
        }
    }
`