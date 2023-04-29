import React from "react";
import articles from "./article-content";
import ArticlesList from "../component/ArticlesList";
const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles}/>
    </>
  );
};

export default ArticleListPage;
