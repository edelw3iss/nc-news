import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";

export default function ArticleList({ topic_slug }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(["created_at", "desc"]);
  const [selected, setSelected] = useState("created_at desc");

  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic_slug, sortBy[0], sortBy[1]).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug, sortBy]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section>
      <SortArticles selected={selected} setSelected={setSelected} setSortBy={setSortBy}/>
      <section className="ArticleList__container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </section>
    </section>
  );
}
