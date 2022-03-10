import { useState, useEffect } from "react";
import { getCommentsByArticleId, postCommentByArticleId } from "../utils/api";
import formatDate from "../utils/formatDate";
import CollapseWrapper from "./CollapseWrapper";
import CommentAdder from "./CommentAdder";

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

  const addComment = (commentToAdd) => {
    const formattedComment = {
      votes: 0,
      author: commentToAdd.username,
      body: commentToAdd.body,
      created_at: new Date().toISOString(),
    };
    setComments((currentComments) => {
      return [formattedComment, ...currentComments];
    });
    postCommentByArticleId(articleId, commentToAdd).catch((err) => {
      console.log(err);
    });
  };

  return (
    <section>
      <h2>Comments</h2>
      <CollapseWrapper>
        {comments.map((comment, index) => {
          return (
            <article key={comment.id || `comment-${index}`}>
              <h3>{comment.author}</h3>
              <h4>{formatDate(comment.created_at)}</h4>
              <p>{comment.body}</p>
              <p>
                <i className="fa-solid fa-thumbs-up"></i> {comment.votes}
              </p>
            </article>
          );
        })}
      </CollapseWrapper>
      <CommentAdder addComment={addComment} />
    </section>
  );
}
