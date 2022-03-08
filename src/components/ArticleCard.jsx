import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

export default function ArticleCard(article) {
  return (
    <article className="ArticleCard__article">
      <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
      <p>{article.author}</p>
      <p>{formatDate(article.created_at)}</p>
    </article>
  );
}
