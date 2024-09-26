import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menu-posts/menu_post";
import MenuCategories from "../menu-categories/menu_categories";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}></MenuPosts>
      {/* */}
      <h2 className={styles.subtitle}>Discovery by topic</h2>
      <h1 className={styles.title}>Category</h1>
      <MenuCategories></MenuCategories>
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
     <MenuPosts withImage={true}></MenuPosts>
    </div>
  );
};
export default Menu;
