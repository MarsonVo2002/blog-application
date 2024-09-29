import React from 'react'
import styles from "./blog_page.module.css"
import CardList from '@/components/card-list/card_list'
const BlogPage = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page = {page} cat ={cat}/>
      </div>
    </div>
  )
}

export default BlogPage