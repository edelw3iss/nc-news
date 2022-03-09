import { useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import formatDate from "../utils/formatDate";

export default function Comments({articleId}) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(ArticleId).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    })
  }, [articleId])

  return <section>
    {comments.map((comment) => {
      return <article>
        <h3>{comment.author}</h3>
        <h4>{formatDate(comment.created_at)}</h4>
        <p>{comment.body}</p>
        <p>👍 {comment.votes}</p>
      </article>
    })}
  </section>
  
}