import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/featured";
import CategoryList from "@/components/category-list/category_list";
import CardList from "@/components/card-list/card_list";
import Menu from "@/components/menu/menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
         <CardList/>
         <Menu/>
      </div>
    </div>
  );
}
