import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Votes from "./Votes";
import formatDate from "../utils/formatDate";
import Comments from "./Comments";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);
  
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <main>
      <p className="SingleArticle__topic">{article.topic}</p>
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <h4>{formatDate(article.created_at)}</h4>
      <p className="SingleArticle__body">{article.body}</p>
      <Votes articleId={article.article_id} votes={article.votes} />
      <Comments articleId={article.article_id} />
    </main>
  );
}
