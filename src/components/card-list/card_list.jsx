import React from "react";
import styles from "./card_list.module.css"
import Pagination from "../pagination/pagination";
import Card from "../card/card";
const CardList = () => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
            <div className={styles.post}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
        <Pagination/>
    </div>)
}
export default CardList;