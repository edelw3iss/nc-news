import { useState, useEffect, useContext } from "react";
import { getCommentsByArticleId } from "../utils/api";
import formatDate from "../utils/formatDate";
import CollapseWrapper from "./CollapseWrapper";
import CommentAdder from "./CommentAdder";
import DeleteComment from "./DeleteComment";

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

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section>
      <h2>Comments</h2>
      <CollapseWrapper>
      <CommentAdder articleId={articleId} setComments={setComments} />
        {comments.map((comment, index) => {
          return (
            <article key={comment.id || `comment-${index}`}>
              <h3>{comment.author}</h3>
              <h4>{formatDate(comment.created_at)}</h4>
              <p>{comment.body}</p>
              <p>
                <i className="fa-solid fa-thumbs-up"></i> {comment.votes}
              </p>
              <DeleteComment comment={comment} index={index} setComments={setComments}/>
            </article>
          );
        })}
      </CollapseWrapper>
    </section>
  );
}


