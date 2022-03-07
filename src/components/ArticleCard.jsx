export default function ArticleCard(article) {
  return (
    <article className="ArticleCard__article">
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <p>{`${article.created_at.slice(0,10)} ${article.created_at.slice(11,16)}`}</p>
    </article>
  );
}
