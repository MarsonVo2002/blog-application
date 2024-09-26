import React from 'react'
import styles from "./single_page.module.css"
const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div></div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}></div>
            <Menu></Menu>
        </div>
    </div>
  )
}

export default SinglePage