import React from "react";
import styles from "./single_page.module.css";
import Menu from "@/components/menu/menu";
import Image from "next/image";
import Comment from "@/components/comments/comment";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              optio dolorem tempore, nulla eveniet ipsam iusto alias quos unde
              provident cumque maiores reprehenderit? Provident sit cupiditate
              amet ab eum odit.
            </p>
            <h2>Lorem ipsum, dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              optio dolorem tempore, nulla eveniet ipsam iusto alias quos unde
              provident cumque maiores reprehenderit? Provident sit cupiditate
              amet ab eum odit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              optio dolorem tempore, nulla eveniet ipsam iusto alias quos unde
              provident cumque maiores reprehenderit? Provident sit cupiditate
              amet ab eum odit.
            </p>
          </div>
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default SinglePage;
