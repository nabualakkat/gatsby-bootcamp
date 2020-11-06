import React from 'react'
import {graphql,useStaticQuery, Link} from 'gatsby'
import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'
import Head from '../components/Head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC }) {
        edges {
          node {
          title
          slug
          publishedDate(formatString: "MMM Do, YYYY")
        }}
      }
    }
  `)
  return(
     
    <Layout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
      {data.allContentfulBlogPost.edges.map((entry)=> {
        return (
        <li className={blogStyles.post} key={entry.node.slug}>
          <Link to={`/blog/${entry.node.slug}`}>
          <h2>{entry.node.title}</h2>
          <p>{entry.node.publishedDate}</p>
          </Link>
        </li>
        )
      })}
    </ol>   
    </Layout>
  )
}

export default BlogPage