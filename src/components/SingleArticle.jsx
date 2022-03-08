import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Votes from "./Votes";
// import formatDate from "../utils/formatDate";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
    });
  }, [article_id]);

  return (
    <main>
      <p className="SingleArticle__topic">{article.topic}</p>
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <h4>{article.created_at}</h4>
      <p className="SingleArticle__body">{article.body}</p>
      <Votes />
    </main>
  );
}
