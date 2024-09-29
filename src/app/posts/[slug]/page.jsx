import React from "react";
import styles from "./single_page.module.css";
import Menu from "@/components/menu/menu";
import Image from "next/image";
import Comment from "@/components/comments/comment";
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if(!res.ok){
    throw new Error("Failed");
  }
  return res.json();
};
const SinglePage = async ({params}) => {
  const { slug } = params;
  const data = await getData(slug);
  console.log("", data);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {data?.title}
          </h1>
          <div className={styles.user}>
           {data?.user?.image && <div className={styles.userImageContainer}>
              <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                ></Image>
            </div>}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          { data?.img && <Image src={data.img} alt="" fill className={styles.image}></Image>}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc} dangerouslySetInnerHTML={{__html: data?.desc}}>
            
          </div>
          <div className={styles.comment}>
            <Comment postSlug={slug}/>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default SinglePage;
