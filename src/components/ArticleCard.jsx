import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

export default function ArticleCard(article) {
  return (
    <article className="ArticleCard__article">
      <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
      <h4>{article.author}</h4>
      <p>{formatDate(article.created_at)}</p>
      <p>👍 {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </article>
  );
}
