import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import formatDate from "../utils/formatDate";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <main>
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <h3>{formatDate(article)}</h3>
    </main>
  );
}
