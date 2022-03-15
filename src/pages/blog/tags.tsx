import React from "react"
import Layout from "@components/layout"

import {TagInterface, TagsGroupInterface} from '../../interfaces'

import { Link, graphql, PageProps } from "gatsby"
import kebabCase from "lodash/kebabCase"


const Tags = ({ data: { tags } }: PageProps<TagsGroupInterface>) => {

  tags.group.sort((a: TagInterface, b: TagInterface) => {
    return b.totalCount - a.totalCount
  })

  return (
    <Layout pageTitle="Blog tags">
      {
        tags.group.map((tag) => (
          <div key={tag.value}>
            <Link to={`/blog/tags/${kebabCase(tag.value)}/`}>
              {tag.value} ({tag.totalCount})
            </Link>
          </div>
        ))
      }
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
    query {
        tags: allMdx {
            group(field: frontmatter___tags) {
                value: fieldValue
                totalCount
            }
        }
    }
`