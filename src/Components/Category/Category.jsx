import React from "react";
import { categoryInfos } from "./categoryInfo.js";
import CategoryCard from "./CategoryCard.jsx";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} />
      ))}
    </section>
  );
}

export default Category;
