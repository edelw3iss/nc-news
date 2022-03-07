import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section>
      {articles.map((article) => {
        return (
            <ArticleCard key={article.article_id} {...article}/>
        );
      })}
    </section>
  );
}
