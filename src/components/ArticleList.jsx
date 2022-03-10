import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import SortArticle from "./SortArticle";

export default function ArticleList({topic_slug}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic_slug).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (<section>
      <SortArticle />
    <section className="ArticleList__container">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </section>
  </section>
  
  );
}
