import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticlesByTopic } from "../utils/api";
import { useParams } from "react-router-dom";

export default function Topic() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const { topic_slug } = useParams();
  console.log(topic_slug, "topic");
  useEffect(
    () => {
      getArticlesByTopic(topic_slug).then((articlesByTopic) => {
        setArticlesByTopic(articlesByTopic);
      });
    },
    [topic_slug]
  );

  return (
    <main>
       <section className="ArticleList__container">
      {articlesByTopic.map((article) => {
        return (
            <ArticleCard key={article.article_id} {...article}/>
        );
      })}
    </section>
    </main>
  );
}
