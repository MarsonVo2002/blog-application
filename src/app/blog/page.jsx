import React from 'react'
import styles from "./blog_page.module.css"
import CardList from '@/components/card-list/card_list'
const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList/>
      </div>
    </div>
  )
}

export default BlogPage