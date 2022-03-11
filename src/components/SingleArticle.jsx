import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Votes from "./Votes";
import formatDate from "../utils/formatDate";
import Comments from "./CommentList";
import ErrorPage from "./ErrorPage";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
        setError(null);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          console.log(msg, status, "ERROR");
          setError({ msg, status });
          setIsLoading(false);
        }
      );
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) return <ErrorPage msg={error.msg}/>

  return (
  <main className="SingleArticle__main">
    <h2>{article.title}</h2>
    <h3>{article.author}</h3>
    <h4>{formatDate(article.created_at)}</h4>
    <p className="SingleArticle__topic">{article.topic}</p>
    <p className="SingleArticle__body">{article.body}</p>
    <Votes articleId={article.article_id} votes={article.votes} />
    <Comments articleId={article.article_id} />
  </main>
  )
  
}
