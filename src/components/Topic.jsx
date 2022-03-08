import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticlesByTopic } from "../utils/api";
import { useParams } from "react-router-dom";

export default function Topic() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();
  console.log(topic_slug, "topic");
  useEffect(() => {
    getArticlesByTopic(topic_slug).then((articlesByTopic) => {
      setArticlesByTopic(articlesByTopic);
      setIsLoading(false);
    });
  }, [topic_slug]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <main>
      <section className="ArticleList__container">
        {articlesByTopic.map((article) => {
          return (
            <ArticleCard
              classname={topic_slug}
              key={article.article_id}
              {...article}
            />
          );
        })}
      </section>
    </main>
  );
}
