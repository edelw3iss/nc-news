import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
// import SortArticle from "./SortArticle";

export default function ArticleList({ topic_slug }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(false);
  const [orderBy, setOrderBy] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic_slug, sortBy, orderBy).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug, sortBy, orderBy]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section>
      <label>
        Sort By:
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="false">None</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="created_at">Created at</option>
          <option value="votes">Number of Likes</option>
          <option value="comment_count">Number of Comments</option>
        </select>
      </label>
      <select onChange={(e) => setOrderBy(e.target.value)}>
        <option value="false">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <label>Order By:</label>
      {/* <SortArticle setIsLoading={setIsLoading} topic_slug="topic_slug" setArticles={setArticles} /> */}
      <section className="ArticleList__container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </section>
    </section>
  );
}
