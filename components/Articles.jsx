import React from "react";
import Card from "./Card";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, i) => {
        return (
          <div className={`col-span-2 max-w-sm`}>
            <Card article={article} key={`article__left__${article.slug}`} />
          </div>
        );
      })}
    </>
  );
};

export default Articles;
