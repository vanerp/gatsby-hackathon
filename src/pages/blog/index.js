import * as React from "react"
import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const BlogPage = ({ data }) => {

  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.posts.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      {
        data.tags.group.map((tag) => (
          <Link to={`/blog/tags/${kebabCase(tag.value)}`} key={tag.value}>
            {tag.value} ({tag.totalCount})
          </Link>
        ))
      }
    </Layout>
  )

}

export const query = graphql`
    query {
        posts: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                slug
            }
        }
        tags: allMdx {
            group(field: frontmatter___tags) {
                value: fieldValue
                totalCount
            }

        }
    }
`

export default BlogPage