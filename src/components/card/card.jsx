import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>

        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          sapiente doloremque quis rerum dolores assumenda modi ratione, culpa
          magni amet harum aspernatur dolore in qui alias sunt eum odio minima?
        </p>
        <Link className={styles.link} href="/">Read More</Link>
      </div>
    </div>
  );
};
export default Card;
