import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
const Card = ({ key, item }) => {
  const dateString = item.createdAt;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-GB");
  return (
    <div className={styles.container} key={key}>
      {item.img !== null ? (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image}></Image>
        </div>
      ) : (
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{formattedDate} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>

        <p className={styles.desc}>{item.desc.split(" ").slice(0, 10).join(" ") + "..."}</p>
        <Link className={styles.link} href={`/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
