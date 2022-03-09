
import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import formatDate from "../utils/formatDate";
import CollapseWrapper from "./CollapseWrapper";

export default function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(articleId).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [articleId]);

  return (
    <section>
      <h2>Comments</h2>
      <CollapseWrapper>
        {comments.map((comment) => {
          return (
            <article>
              <h3>{comment.author}</h3>
              <h4>{formatDate(comment.created_at)}</h4>
              <p>{comment.body}</p>
              <p><i class="fa-solid fa-thumbs-up"></i> {comment.votes}</p>
            </article>
          );
        })}
      </CollapseWrapper>
    </section>
  );
}