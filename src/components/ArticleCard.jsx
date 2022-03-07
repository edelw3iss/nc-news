export default function ArticleCard(article) {
  return (
    <article>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
    </article>
  );
}
