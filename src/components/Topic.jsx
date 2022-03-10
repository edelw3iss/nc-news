import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

export default function Topic() {
  const { topic_slug } = useParams();

  return (
    <main>
      <ArticleList topic_slug={topic_slug}/>
    </main>
  );
}
