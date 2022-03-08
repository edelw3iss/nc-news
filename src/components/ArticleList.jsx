import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section className="ArticleList__container">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </section>
  );
}
